'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Pixel {
    brightness: number;
    targetBrightness: number;
    hue: number;
}

export default function PixelGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | undefined>(undefined);
    const pixelsRef = useRef<Pixel[][]>([]);
    const gridSize = 20; // Size of each pixel in the grid
    const cols = useRef(0);
    const rows = useRef(0);

    const initGrid = useCallback((width: number, height: number) => {
        cols.current = Math.ceil(width / gridSize);
        rows.current = Math.ceil(height / gridSize);

        const newPixels: Pixel[][] = [];
        for (let y = 0; y < rows.current; y++) {
            const row: Pixel[] = [];
            for (let x = 0; x < cols.current; x++) {
                row.push({
                    brightness: 0,
                    targetBrightness: 0,
                    hue: 210 + Math.random() * 30, // Blue-ish hues
                });
            }
            newPixels.push(row);
        }
        pixelsRef.current = newPixels;
    }, []);

    const activatePixel = useCallback((mouseX: number, mouseY: number) => {
        const pixels = pixelsRef.current;
        if (!pixels.length) return;

        const gridX = Math.floor(mouseX / gridSize);
        const gridY = Math.floor(mouseY / gridSize);

        // Activate pixels in a radius around the mouse
        const radius = 3;
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const x = gridX + dx;
                const y = gridY + dy;

                if (x >= 0 && x < cols.current && y >= 0 && y < rows.current) {
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist <= radius) {
                        const strength = 1 - dist / radius;
                        pixels[y][x].targetBrightness = Math.min(1, pixels[y][x].targetBrightness + strength * 0.8);
                        // Shift hue slightly based on position
                        pixels[y][x].hue = 200 + (x + y) % 60;
                    }
                }
            }
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
            initGrid(canvas.width, canvas.height);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleMouseMove = (e: MouseEvent) => {
            activatePixel(e.clientX, e.clientY);
        };

        const handleClick = (e: MouseEvent) => {
            // Stronger activation on click
            const pixels = pixelsRef.current;
            const gridX = Math.floor(e.clientX / gridSize);
            const gridY = Math.floor(e.clientY / gridSize);

            const radius = 5;
            for (let dy = -radius; dy <= radius; dy++) {
                for (let dx = -radius; dx <= radius; dx++) {
                    const x = gridX + dx;
                    const y = gridY + dy;

                    if (x >= 0 && x < cols.current && y >= 0 && y < rows.current) {
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist <= radius) {
                            pixels[y][x].targetBrightness = 1;
                        }
                    }
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        const render = () => {
            const pixels = pixelsRef.current;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw pixels
            for (let y = 0; y < rows.current; y++) {
                for (let x = 0; x < cols.current; x++) {
                    const pixel = pixels[y]?.[x];
                    if (!pixel) continue;

                    // Smooth interpolation toward target
                    pixel.brightness += (pixel.targetBrightness - pixel.brightness) * 0.15;

                    // Decay target
                    pixel.targetBrightness *= 0.96;

                    // Only draw if visible
                    if (pixel.brightness > 0.01) {
                        const alpha = pixel.brightness * 0.6;
                        const lightness = 50 + pixel.brightness * 20;

                        ctx.fillStyle = `hsla(${pixel.hue}, 80%, ${lightness}%, ${alpha})`;
                        ctx.fillRect(
                            x * gridSize + 1,
                            y * gridSize + 1,
                            gridSize - 2,
                            gridSize - 2
                        );
                    }
                }
            }

            // Draw subtle grid lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;

            for (let x = 0; x <= cols.current; x++) {
                ctx.beginPath();
                ctx.moveTo(x * gridSize, 0);
                ctx.lineTo(x * gridSize, canvas.height);
                ctx.stroke();
            }

            for (let y = 0; y <= rows.current; y++) {
                ctx.beginPath();
                ctx.moveTo(0, y * gridSize);
                ctx.lineTo(canvas.width, y * gridSize);
                ctx.stroke();
            }

            animationRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [initGrid, activatePixel]);

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
