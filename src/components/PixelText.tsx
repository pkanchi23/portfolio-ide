'use client';

import { useEffect, useRef, useState } from 'react';

interface PixelTextProps {
    text: string;
    className?: string;
    pixelSize?: number;
    style?: React.CSSProperties;
}

export default function PixelText({ text, className = '', pixelSize = 4, style = {} }: PixelTextProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);
    const animationRef = useRef<number | undefined>(undefined);
    const originalDataRef = useRef<ImageData | null>(null);

    // Grid state
    const gridStateRef = useRef<{
        cells: {
            active: boolean;
            decay: number;
            color: string;
        }[][];
        scanX: number;
        hasScanned: boolean;
    }>({ cells: [], scanX: -20, hasScanned: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        const renderText = () => {
            if (!containerRef.current) return;

            // Get font styles from container (which inherits from parent)
            const computedStyle = window.getComputedStyle(containerRef.current);
            const fontSize = parseFloat(computedStyle.fontSize);
            const fontFamily = computedStyle.fontFamily;
            const fontWeight = computedStyle.fontWeight || '700';

            // Set context font for measurement
            ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
            const metrics = ctx.measureText(text);

            // Calculate required size with some padding
            const padding = pixelSize * 2;
            const width = Math.ceil(metrics.width + padding * 2);
            // approximate height from font size
            const height = Math.ceil(fontSize * 1.2 + padding * 2);

            // Set canvas size
            const dpr = window.devicePixelRatio || 1;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.scale(dpr, dpr);

            // Redefine font after resize (canvas reset clears context state)
            ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
            ctx.fillStyle = '#fafafa';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';

            // Draw centered
            ctx.fillText(text, width / 2, height / 2);

            // Store original pixel data
            originalDataRef.current = ctx.getImageData(0, 0, canvas.width, canvas.height);

            // Initialize grid state
            const cols = Math.ceil(canvas.width / pixelSize);
            const rows = Math.ceil(canvas.height / pixelSize);
            gridStateRef.current.cells = Array(rows).fill(0).map(() =>
                Array(cols).fill(0).map(() => ({
                    active: false,
                    decay: 0,
                    color: `hsl(${200 + Math.random() * 40}, 80%, 60%)` // Blue-cyan range
                }))
            );
        };

        renderText();
        // Re-render on resize? Maybe simplified for now.
    }, [text, pixelSize]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!canvasRef.current || !originalDataRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) * window.devicePixelRatio;
        const y = (e.clientY - rect.top) * window.devicePixelRatio;

        // Convert to grid coords
        const gridX = Math.floor(x / pixelSize);
        const gridY = Math.floor(y / pixelSize);

        // Activate pixels in radius
        const radius = 8; // Increased radius
        const grid = gridStateRef.current.cells;

        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const row = gridY + dy;
                const col = gridX + dx;

                // Circular radius check
                if (dx * dx + dy * dy <= radius * radius) {
                    if (grid[row] && grid[row][col]) {
                        grid[row][col].active = true;
                        grid[row][col].decay = 1.0;
                    }
                }
            }
        }

        setIsActive(true);
    };

    useEffect(() => {
        if (!isActive) return;

        const animate = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx || !originalDataRef.current) return;

            const grid = gridStateRef.current.cells;
            const originalData = originalDataRef.current;
            let hasActivity = false;

            // Create new image data from scratch
            const newImageData = new ImageData(
                new Uint8ClampedArray(originalData.data),
                originalData.width,
                originalData.height
            );

            // Iterate grid and update pixels
            for (let y = 0; y < grid.length; y++) {
                for (let x = 0; x < grid[y].length; x++) {
                    const cell = grid[y][x];

                    if (cell.decay > 0.01) {
                        hasActivity = true;
                        cell.decay *= 0.98; // Much slower decay for longer trailing effect

                        // Only affect pixels that have content (alpha > 0)
                        const px = x * pixelSize;
                        const py = y * pixelSize;
                        const idx = (py * originalData.width + px) * 4;

                        if (originalData.data[idx + 3] > 0) {
                            for (let by = 0; by < pixelSize; by++) {
                                for (let bx = 0; bx < pixelSize; bx++) {
                                    const checkY = py + by;
                                    const checkX = px + bx;
                                    if (checkX < originalData.width && checkY < originalData.height) {
                                        const i = (checkY * originalData.width + checkX) * 4;
                                        if (originalData.data[i + 3] > 0) {
                                            newImageData.data[i] = 59; // R
                                            newImageData.data[i + 1] = 130 + cell.decay * 100; // G
                                            newImageData.data[i + 2] = 246; // B
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            ctx.putImageData(newImageData, 0, 0);

            if (hasActivity) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                setIsActive(false);
                ctx.putImageData(originalData, 0, 0);
            }
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isActive, pixelSize]); // Re-run when isActive changes (to restart loop if needed)

    // Trigger animation start on mount
    useEffect(() => {
        setIsActive(true);
    }, []);

    return (
        <div ref={containerRef} className={className} style={{ display: 'inline-block', ...style }}>
            <canvas
                ref={canvasRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => { }}
                style={{ cursor: 'default' }}
            />
        </div>
    );
}
