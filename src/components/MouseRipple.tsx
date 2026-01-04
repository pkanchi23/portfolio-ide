'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Ripple {
    x: number;
    y: number;
    size: number;
    opacity: number;
    startTime: number;
}

export default function MouseRipple() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ripplesRef = useRef<Ripple[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number | undefined>(undefined);
    const lastRippleTime = useRef(0);

    const createRipple = useCallback((x: number, y: number) => {
        const now = Date.now();
        // Throttle ripple creation
        if (now - lastRippleTime.current < 50) return;
        lastRippleTime.current = now;

        ripplesRef.current.push({
            x,
            y,
            size: 0,
            opacity: 0.4,
            startTime: now,
        });

        // Limit max ripples
        if (ripplesRef.current.length > 15) {
            ripplesRef.current.shift();
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            createRipple(e.clientX, e.clientY);
        };

        const handleClick = (e: MouseEvent) => {
            // Create a bigger ripple on click
            ripplesRef.current.push({
                x: e.clientX,
                y: e.clientY,
                size: 0,
                opacity: 0.6,
                startTime: Date.now(),
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const now = Date.now();

            // Update and draw ripples
            ripplesRef.current = ripplesRef.current.filter((ripple) => {
                const age = now - ripple.startTime;
                const maxAge = 1500; // Ripple lifespan in ms

                if (age > maxAge) return false;

                const progress = age / maxAge;
                ripple.size = progress * 200; // Max size
                ripple.opacity = 0.4 * (1 - progress);

                // Draw ripple
                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ripple.size, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(59, 130, 246, ${ripple.opacity})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Inner glow
                const gradient = ctx.createRadialGradient(
                    ripple.x, ripple.y, 0,
                    ripple.x, ripple.y, ripple.size
                );
                gradient.addColorStop(0, `rgba(59, 130, 246, ${ripple.opacity * 0.3})`);
                gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                ctx.fillStyle = gradient;
                ctx.fill();

                return true;
            });

            // Draw mouse glow
            const { x, y } = mouseRef.current;
            if (x > 0 && y > 0) {
                const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, 150);
                glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
                glowGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)');
                glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(x, y, 150, 0, Math.PI * 2);
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [createRipple]);

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
                zIndex: 0,
            }}
        />
    );
}
