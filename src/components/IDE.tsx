'use client';

import { useState, useEffect } from 'react';
import fileSystem, { FileNode } from '@/data/fileSystem';
import Sidebar from './Sidebar';
import TabBar from './TabBar';
import Editor from './Editor';
import Terminal from './Terminal';
import StatusBar from './StatusBar';

export interface OpenFile {
    node: FileNode;
    path: string;
}

export default function IDE() {
    const [openFiles, setOpenFiles] = useState<OpenFile[]>([]);
    const [activeFile, setActiveFile] = useState<OpenFile | null>(null);
    const [terminalHistory, setTerminalHistory] = useState<string[]>([
        'Welcome to Pranav\'s Portfolio Terminal',
        'Type "help" for available commands',
        ''
    ]);

    // Open README.md by default
    useEffect(() => {
        const readme = fileSystem.find(node => node.name === 'README.md');
        if (readme && openFiles.length === 0) {
            const file: OpenFile = { node: readme, path: 'README.md' };
            setOpenFiles([file]);
            setActiveFile(file);
        }
    }, []);

    const handleFileClick = (node: FileNode, path: string) => {
        if (node.type === 'file') {
            // Check if file is already open
            const existing = openFiles.find(f => f.path === path);
            if (existing) {
                setActiveFile(existing);
            } else {
                const newFile: OpenFile = { node, path };
                setOpenFiles([...openFiles, newFile]);
                setActiveFile(newFile);
            }
        }
    };

    const handleTabClick = (file: OpenFile) => {
        setActiveFile(file);
    };

    const handleTabClose = (file: OpenFile) => {
        const newOpenFiles = openFiles.filter(f => f.path !== file.path);
        setOpenFiles(newOpenFiles);

        // If closing active file, switch to another
        if (activeFile?.path === file.path) {
            setActiveFile(newOpenFiles.length > 0 ? newOpenFiles[newOpenFiles.length - 1] : null);
        }
    };

    const handleTerminalCommand = (command: string) => {
        const newHistory = [...terminalHistory, `$ ${command}`];
        const output = executeCommand(command);
        setTerminalHistory([...newHistory, output, '']);
    };

    const executeCommand = (command: string): string => {
        const cmd = command.trim().toLowerCase();

        switch (cmd) {
            case 'help':
                return `Available commands:
  whoami      - Display brief bio
  skills      - Show skills breakdown
  experience  - Show career timeline  
  contact     - Display contact information
  hire-me     - Why you should hire me
  ls          - List files
  clear       - Clear terminal
  help        - Show this message`;

            case 'whoami':
                return `Pranav Kanchi - Investment Banking Analyst @ Goldman Sachs
Dual expertise in Finance (NYU Stern, 3.95 GPA) and Computer Science (NYU Tandon)
Working at the intersection of M&A and technology`;

            case 'skills':
                return `Core Skills:
  💼 Investment Banking: M&A, Debt Financing, Valuation
  💻 Programming: Python, TypeScript, SQL
  🤖 AI/ML: NLP, BERT, Topic Modeling
  📊 Tools: Capital IQ, PitchBook, Bloomberg
  
Run: Open skills.ts for detailed breakdown`;

            case 'experience':
                return `Career Timeline:
  2025-Present  Goldman Sachs (SF) - IB Analyst, TMT
  2023-2025     Guggenheim Partners (Menlo Park) - IB Analyst
  2022          Bullet Point Network (NYC) - VC Analyst
  2021          RillaVoice (NYC) - ML Intern
  
Open experience/ folder for detailed history`;

            case 'contact':
                return `📧 Email: pranavkanchi23@gmail.com
📱 Phone: (949) 381-8482
📍 Location: San Francisco, CA
💼 LinkedIn: linkedin.com/in/pranavkanchi
💻 GitHub: github.com/pranavkanchi`;

            case 'hire-me':
                return `Why hire me?

1. Unique blend of finance + tech: Only analyst at GS with dev access
2. Proven deal experience: $2B+ in transactions, only junior on Databricks Series L
3. Technical depth: Built ML models with 72% accuracy improvement
4. Startup fluent: Worked at VC firms and high-growth startups
5. Fast learner: 3.95 GPA, 4x AIME qualifier

Let's talk: pranavkanchi23@gmail.com`;

            case 'ls':
                return `README.md
experience/
projects/
skills.ts
blog/
contact.yaml`;

            case 'clear':
                setTerminalHistory(['']);
                return '';

            default:
                return `Command not found: ${command}. Type 'help' for available commands.`;
        }
    };

    return (
        <div className="ide-container">
            <div className="ide-main">
                <Sidebar
                    fileSystem={fileSystem}
                    onFileClick={handleFileClick}
                    activeFilePath={activeFile?.path || ''}
                />
                <div className="editor">
                    <TabBar
                        openFiles={openFiles}
                        activeFile={activeFile}
                        onTabClick={handleTabClick}
                        onTabClose={handleTabClose}
                    />
                    <Editor activeFile={activeFile} />
                </div>
            </div>
            <Terminal
                history={terminalHistory}
                onCommand={handleTerminalCommand}
            />
            <StatusBar
                activeFile={activeFile}
                lineCount={activeFile?.node.content?.split('\n').length || 0}
            />
        </div>
    );
}
