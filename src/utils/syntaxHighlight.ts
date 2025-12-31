// Syntax Highlighting Utility
// Tokenize and highlight code based on language

const htmlEscape = (str: string): string => {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

export const highlightSyntax = (line: string, language: string): string => {
    if (!line.trim()) return '&nbsp;';

    const escaped = htmlEscape(line);

    switch (language) {
        case 'typescript':
        case 'javascript':
            return highlightTypeScript(escaped);
        case 'json':
            return highlightJSON(escaped);
        case 'python':
            return highlightPython(escaped);
        case 'yaml':
            return highlightYAML(escaped);
        case 'markdown':
            return highlightMarkdown(escaped);
        default:
            return escaped;
    }
};

const highlightTypeScript = (line: string): string => {
    // Keywords
    line = line.replace(/\b(const|let|var|function|class|interface|type|export|import|from|return|if|else|for|while|async|await|new|this|extends|implements)\b/g,
        '<span class="token-keyword">$1</span>');

    // Strings
    line = line.replace(/(['"`])(.*?)\1/g, '<span class="token-string">$1$2$1</span>');

    // Comments
    line = line.replace(/(\/\/.*$)/g, '<span class="token-comment">$1</span>');

    // Numbers
    line = line.replace(/\b(\d+)\b/g, '<span class="token-number">$1</span>');

    // Functions
    line = line.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, '<span class="token-function">$1</span>(');

    return line;
};

const highlightJSON = (line: string): string => {
    // Property names
    line = line.replace(/"([^"]+)":/g, '<span class="token-property">"$1"</span>:');

    // String values
    line = line.replace(/:\s*"([^"]*)"/g, ': <span class="token-string">"$1"</span>');

    // Numbers
    line = line.replace(/:\s*(\d+)/g, ': <span class="token-number">$1</span>');

    // Booleans and null
    line = line.replace(/:\s*(true|false|null)/g, ': <span class="token-keyword">$1</span>');

    return line;
};

const highlightPython = (line: string): string => {
    // Keywords
    line = line.replace(/\b(def|class|import|from|return|if|elif|else|for|while|in|as|with|try|except|finally|raise|pass|break|continue|lambda|yield|async|await)\b/g,
        '<span class="token-keyword">$1</span>');

    // Strings
    line = line.replace(/(['"`]{1,3})(.*?)\1/g, '<span class="token-string">$1$2$1</span>');

    // Comments
    line = line.replace(/(#.*$)/g, '<span class="token-comment">$1</span>');

    // Numbers
    line = line.replace(/\b(\d+\.?\d*)\b/g, '<span class="token-number">$1</span>');

    // Functions
    line = line.replace(/\bdef\s+([a-zA-Z_][a-zA-Z0-9_]*)/g, 'def <span class="token-function">$1</span>');

    return line;
};

const highlightYAML = (line: string): string => {
    // Keys
    line = line.replace(/^(\s*)([a-zA-Z_][a-zA-Z0-9_]*):/g, '$1<span class="token-property">$2</span>:');

    // Strings
    line = line.replace(/:\s*"([^"]*)"/g, ': <span class="token-string">"$1"</span>');
    line = line.replace(/:\s*'([^']*)'/g, ': <span class="token-string">\'$1\'</span>');

    // Comments
    line = line.replace(/(#.*$)/g, '<span class="token-comment">$1</span>');

    // URLs and emails
    line = line.replace(/(https?:\/\/[^\s]+)/g, '<span class="token-string">$1</span>');

    return line;
};

const highlightMarkdown = (line: string): string => {
    // Headers
    if (line.match(/^#{1,6}\s/)) {
        return `<span class="token-keyword" style="font-weight: 700; font-size: 1.2em;">${line}</span>`;
    }

    // Bold
    line = line.replace(/\*\*([^*]+)\*\*/g, '<span style="font-weight: 700;">**$1**</span>');

    // Italic
    line = line.replace(/\*([^*]+)\*/g, '<span style="font-style: italic;">*$1*</span>');

    // Code
    line = line.replace(/`([^`]+)`/g, '<span class="token-string">`$1`</span>');

    // Links
    line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<span class="token-function">[$1]</span>(<span class="token-string">$2</span>)');

    // Lists
    if (line.match(/^\s*[-*]\s/)) {
        line = line.replace(/^(\s*)([-*]\s)/, '$1<span class="token-keyword">$2</span>');
    }

    return line;
};

export default highlightSyntax;
