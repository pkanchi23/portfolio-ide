'use client';

import { OpenFile } from './IDE';

interface TabBarProps {
    openFiles: OpenFile[];
    activeFile: OpenFile | null;
    onTabClick: (file: OpenFile) => void;
    onTabClose: (file: OpenFile) => void;
}

export default function TabBar({ openFiles, activeFile, onTabClick, onTabClose }: TabBarProps) {
    if (openFiles.length === 0) {
        return <div className="tab-bar" />;
    }

    return (
        <div className="tab-bar">
            {openFiles.map(file => {
                const isActive = activeFile?.path === file.path;
                const fileName = file.path.split('/').pop() || file.path;

                return (
                    <div
                        key={file.path}
                        className={`tab ${isActive ? 'active' : ''}`}
                        onClick={() => onTabClick(file)}
                    >
                        <span className="tab-icon">{file.node.icon}</span>
                        <span className="tab-label">{fileName}</span>
                        <span
                            className="tab-close"
                            onClick={(e) => {
                                e.stopPropagation();
                                onTabClose(file);
                            }}
                        >
                            ✕
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
