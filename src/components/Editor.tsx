'use client';

import { OpenFile } from './IDE';
import { highlightSyntax } from '@/utils/syntaxHighlight';

interface EditorProps {
    activeFile: OpenFile | null;
}

export default function Editor({ activeFile }: EditorProps) {
    if (!activeFile || !activeFile.node.content) {
        return (
            <div className="editor-content" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                height: '100%'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '48px', marginBottom: '1rem' }}>💻</div>
                    <div style={{ fontSize: '14px' }}>Select a file to view its contents</div>
                    <div style={{ fontSize: '12px', marginTop: '0.5rem', opacity: 0.7 }}>
                        Click on files in the sidebar or try terminal commands
                    </div>
                </div>
            </div>
        );
    }

    const lines = activeFile.node.content.split('\n');
    const language = activeFile.node.language || 'text';

    return (
        <div className="editor-content">
            {lines.map((line, index) => (
                <div key={index} className="code-line">
                    <span className="line-number">{index + 1}</span>
                    <span
                        className="line-content"
                        dangerouslySetInnerHTML={{
                            __html: highlightSyntax(line, language)
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
