'use client';

import { OpenFile } from './IDE';

interface StatusBarProps {
    activeFile: OpenFile | null;
    lineCount: number;
}

export default function StatusBar({ activeFile, lineCount }: StatusBarProps) {
    const getLanguageDisplay = () => {
        if (!activeFile) return 'No file open';
        const lang = activeFile.node.language || 'text';
        return lang.charAt(0).toUpperCase() + lang.slice(1);
    };

    const getFileIcon = () => {
        if (!activeFile) return '○';
        return activeFile.node.icon || '📄';
    };

    return (
        <div className="status-bar">
            <div className="status-left">
                <div className="status-item">
                    <span>⎇</span>
                    <span>main</span>
                </div>
                {activeFile && (
                    <div className="status-item">
                        <span>{getFileIcon()}</span>
                        <span>{activeFile.path}</span>
                    </div>
                )}
            </div>
            <div className="status-right">
                <div className="status-item">
                    <span>{getLanguageDisplay()}</span>
                </div>
                {activeFile && (
                    <>
                        <div className="status-item">
                            <span>Ln {lineCount}</span>
                        </div>
                        <div className="status-item">
                            <span>UTF-8</span>
                        </div>
                        <div className="status-item">
                            <span>LF</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
