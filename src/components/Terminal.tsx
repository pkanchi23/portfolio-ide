'use client';

import { useState, useRef, useEffect } from 'react';

interface TerminalProps {
    history: string[];
    onCommand: (command: string) => void;
}

export default function Terminal({ history, onCommand }: TerminalProps) {
    const [input, setInput] = useState('');
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom when history updates
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onCommand(input);
            setInput('');
        }
    };

    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="terminal">
            <div className="terminal-header">
                <span>TERMINAL</span>
            </div>
            <div
                className="terminal-content"
                ref={terminalRef}
                onClick={handleTerminalClick}
            >
                {history.map((line, index) => {
                    if (line.startsWith('$')) {
                        return (
                            <div key={index} className="terminal-line">
                                <span className="terminal-prompt">➜</span>
                                <span>{line.substring(2)}</span>
                            </div>
                        );
                    } else {
                        return (
                            <div key={index} className="terminal-output">
                                {line}
                            </div>
                        );
                    }
                })}
                <form onSubmit={handleSubmit} className="terminal-line">
                    <span className="terminal-prompt">➜</span>
                    <input
                        ref={inputRef}
                        type="text"
                        className="terminal-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        autoFocus
                        spellCheck={false}
                    />
                </form>
            </div>
        </div>
    );
}
