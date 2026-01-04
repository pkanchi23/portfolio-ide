'use client';

import { useEffect, useRef, useCallback } from 'react';

// Vertex shader
const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_texCoord;
  
  void main() {
    v_texCoord = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

// Realistic water shader with multiple wave interference
const fragmentShaderSource = `
  precision highp float;
  
  varying vec2 v_texCoord;
  uniform float u_time;
  uniform vec2 u_resolution;
  
  #define MAX_RIPPLES 20
  uniform vec3 u_ripples[MAX_RIPPLES];
  uniform int u_rippleCount;
  
  // Calculate a single realistic ripple with multiple harmonics
  float calculateRipple(vec2 uv, vec2 center, float rippleTime, float currentTime) {
    float dist = distance(uv, center);
    float age = currentTime - rippleTime;
    
    if (age < 0.0 || age > 5.0) return 0.0;
    
    // Realistic water wave physics
    // Gravity waves: speed proportional to sqrt(wavelength)
    float baseSpeed = 0.08;
    
    // Multiple wave harmonics for realism
    float wave = 0.0;
    
    // Primary wave - slow, large
    float speed1 = baseSpeed;
    float freq1 = 25.0;
    float amp1 = 1.0;
    float phase1 = dist * freq1 - age * speed1 * freq1;
    wave += sin(phase1) * amp1 * exp(-age * 0.6) * exp(-dist * 0.8);
    
    // Secondary wave - slightly faster, medium
    float speed2 = baseSpeed * 1.3;
    float freq2 = 40.0;
    float amp2 = 0.5;
    float phase2 = dist * freq2 - age * speed2 * freq2;
    wave += sin(phase2) * amp2 * exp(-age * 0.8) * exp(-dist * 1.2);
    
    // Tertiary wave - fastest, small ripples
    float speed3 = baseSpeed * 1.6;
    float freq3 = 60.0;
    float amp3 = 0.25;
    float phase3 = dist * freq3 - age * speed3 * freq3;
    wave += sin(phase3) * amp3 * exp(-age * 1.0) * exp(-dist * 1.5);
    
    // Smooth fade in
    wave *= smoothstep(0.0, 0.1, age);
    
    // Amplitude envelope - starts strong, fades
    float envelope = exp(-age * 0.4) * (1.0 - exp(-age * 8.0));
    wave *= envelope;
    
    return wave * 0.4;
  }
  
  // Calculate height at a point
  float getHeight(vec2 uv, float time) {
    float height = 0.0;
    for (int i = 0; i < MAX_RIPPLES; i++) {
      if (i >= u_rippleCount) break;
      vec2 ripplePos = u_ripples[i].xy;
      float rippleTime = u_ripples[i].z;
      height += calculateRipple(uv, ripplePos, rippleTime, time);
    }
    return height;
  }
  
  void main() {
    vec2 uv = v_texCoord;
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    vec2 uvAspect = uv * aspect;
    
    float height = getHeight(uvAspect, u_time);
    
    // Early exit if no disturbance
    if (abs(height) < 0.002) {
      gl_FragColor = vec4(0.0);
      return;
    }
    
    // Calculate surface normal using central differences
    float eps = 0.004;
    float hL = getHeight(uvAspect - vec2(eps, 0.0), u_time);
    float hR = getHeight(uvAspect + vec2(eps, 0.0), u_time);
    float hT = getHeight(uvAspect - vec2(0.0, eps), u_time);
    float hB = getHeight(uvAspect + vec2(0.0, eps), u_time);
    
    // Normal from height gradient
    vec3 normal = normalize(vec3(
      (hL - hR) * 2.0,
      (hT - hB) * 2.0,
      0.1
    ));
    
    // Lighting setup
    vec3 lightDir = normalize(vec3(0.3, 0.4, 1.0));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 halfDir = normalize(lightDir + viewDir);
    
    // Diffuse lighting
    float diffuse = max(dot(normal, lightDir), 0.0);
    
    // Specular - Blinn-Phong
    float specPower = 128.0;
    float spec = pow(max(dot(normal, halfDir), 0.0), specPower);
    
    // Fresnel effect - stronger at glancing angles
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 4.0);
    
    // Refraction offset for depth illusion
    vec2 refractOffset = normal.xy * 0.02;
    
    // Water color palette
    vec3 deepColor = vec3(0.1, 0.3, 0.5);
    vec3 surfaceColor = vec3(0.2, 0.5, 0.8);
    vec3 highlightColor = vec3(0.7, 0.9, 1.0);
    vec3 specColor = vec3(1.0, 1.0, 1.0);
    
    // Mix colors based on height and lighting
    float heightFactor = clamp(height * 2.0 + 0.5, 0.0, 1.0);
    vec3 waterColor = mix(deepColor, surfaceColor, heightFactor);
    
    // Apply lighting
    vec3 color = waterColor * (0.3 + diffuse * 0.5);
    color += specColor * spec * 0.6;
    color += highlightColor * fresnel * 0.25;
    
    // Caustic-like bright spots on wave peaks
    float caustic = smoothstep(0.1, 0.3, height) * 0.3;
    color += highlightColor * caustic;
    
    // Alpha - visible based on disturbance
    float alpha = abs(height) * 1.5 + spec * 0.4 + fresnel * 0.1;
    alpha = clamp(alpha, 0.0, 0.5);
    
    // Soft edges
    alpha *= smoothstep(0.0, 0.01, abs(height));
    
    gl_FragColor = vec4(color, alpha);
  }
`;

interface Ripple {
    x: number;
    y: number;
    time: number;
}

export default function WaterEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const glRef = useRef<WebGLRenderingContext | null>(null);
    const programRef = useRef<WebGLProgram | null>(null);
    const animationRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef(Date.now());
    const ripplesRef = useRef<Ripple[]>([]);
    const lastMoveRipple = useRef(0);
    const lastMousePos = useRef({ x: 0, y: 0 });

    const createShader = useCallback((gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null => {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }, []);

    const createProgram = useCallback((gl: WebGLRenderingContext): WebGLProgram | null => {
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        if (!vertexShader || !fragmentShader) return null;

        const program = gl.createProgram();
        if (!program) return null;

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            return null;
        }

        return program;
    }, [createShader]);

    const addRipple = useCallback((x: number, y: number, strength: number = 1) => {
        const currentTime = (Date.now() - startTimeRef.current) / 1000;
        ripplesRef.current.push({
            x: x / window.innerWidth,
            y: 1.0 - y / window.innerHeight,
            time: currentTime
        });
        if (ripplesRef.current.length > 20) {
            ripplesRef.current.shift();
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl', {
            alpha: true,
            premultipliedAlpha: false,
            antialias: true
        });
        if (!gl) return;
        glRef.current = gl;

        const program = createProgram(gl);
        if (!program) return;
        programRef.current = program;

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1, 1, -1, -1, 1,
            -1, 1, 1, -1, 1, 1
        ]), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            const dx = e.clientX - lastMousePos.current.x;
            const dy = e.clientY - lastMousePos.current.y;
            const speed = Math.sqrt(dx * dx + dy * dy);

            lastMousePos.current = { x: e.clientX, y: e.clientY };

            // Only create ripples when moving with some speed
            if (speed > 3 && now - lastMoveRipple.current > 120) {
                addRipple(e.clientX, e.clientY);
                lastMoveRipple.current = now;
            }
        };

        const handleClick = (e: MouseEvent) => {
            addRipple(e.clientX, e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        const render = () => {
            if (!gl || !program) return;

            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.useProgram(program);

            const time = (Date.now() - startTimeRef.current) / 1000;
            ripplesRef.current = ripplesRef.current.filter(r => time - r.time < 5.0);

            gl.uniform1f(gl.getUniformLocation(program, 'u_time'), time);
            gl.uniform2f(gl.getUniformLocation(program, 'u_resolution'), canvas.width, canvas.height);

            const rippleData: number[] = [];
            ripplesRef.current.forEach(r => {
                rippleData.push(r.x, r.y, r.time);
            });
            while (rippleData.length < 60) rippleData.push(0);
            gl.uniform3fv(gl.getUniformLocation(program, 'u_ripples'), rippleData);
            gl.uniform1i(gl.getUniformLocation(program, 'u_rippleCount'), ripplesRef.current.length);

            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationRef.current = requestAnimationFrame(render);
        };

        gl.clearColor(0, 0, 0, 0);
        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [createProgram, addRipple]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        />
    );
}
