'use client';

import { useState } from 'react';
import { FileNode } from '@/data/fileSystem';

interface SidebarProps {
    fileSystem: FileNode[];
    onFileClick: (node: FileNode, path: string) => void;
    activeFilePath: string;
}

export default function Sidebar({ fileSystem, onFileClick, activeFilePath }: SidebarProps) {
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['experience', 'projects', 'blog']));

    const toggleFolder = (folderName: string) => {
        const newExpanded = new Set(expandedFolders);
        if (newExpanded.has(folderName)) {
            newExpanded.delete(folderName);
        } else {
            newExpanded.add(folderName);
        }
        setExpandedFolders(newExpanded);
    };

    const renderNode = (node: FileNode, path: string, level: number = 0) => {
        if (node.type === 'folder') {
            const isExpanded = expandedFolders.has(node.name);
            return (
                <div key={path}>
                    <div
                        className="folder-item"
                        onClick={() => toggleFolder(node.name)}
                        style={{ paddingLeft: `${level * 12 + 12}px` }}
                    >
                        <span className="folder-icon">{isExpanded ? '📂' : '📁'}</span>
                        <span>{node.name}</span>
                    </div>
                    {isExpanded && node.children && (
                        <div className="folder-children">
                            {node.children.map(child => renderNode(child, `${path}/${child.name}`, level + 1))}
                        </div>
                    )}
                </div>
            );
        } else {
            const isActive = activeFilePath === path;
            return (
                <div
                    key={path}
                    className={`file-item ${isActive ? 'active' : ''}`}
                    onClick={() => onFileClick(node, path)}
                    style={{ paddingLeft: `${level * 12 + 12}px` }}
                >
                    <span className="file-icon">{node.icon}</span>
                    <span>{node.name}</span>
                </div>
            );
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                EXPLORER
            </div>
            <div className="file-tree">
                {fileSystem.map(node => renderNode(node, node.name, 0))}
            </div>
        </div>
    );
}
