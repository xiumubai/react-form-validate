import React, { useState } from 'react';
import { Card, Button, message } from 'antd';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';
import './CodeBlock.css';

/**
 * 自动代码块组件，可以自动读取指定文件的内容并展示
 * @param {Object} props 组件属性
 * @param {string} props.filePath 文件路径，相对于src目录
 * @param {string} props.title 代码块标题
 * @param {number} props.startLine 开始行号（可选，从0开始计数）
 * @param {number} props.endLine 结束行号（可选）
 */
const AutoCodeBlock = ({ filePath, title, startLine, endLine }) => {
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);

  // 使用import.meta.glob加载文件内容
  React.useEffect(() => {
    const loadCode = async () => {
      try {
        // 使用Vite的import.meta.glob功能加载源代码文件
        const modules = import.meta.glob('/src/**/*.jsx', { query: '?raw', import: 'default', eager: true });
        const fullPath = `/src/${filePath}`;
        
        if (!modules[fullPath]) {
          throw new Error(`找不到文件: ${fullPath}`);
        }
        
        let content = modules[fullPath];
        
        // 如果指定了行号范围，则只显示指定范围的内容
        if (startLine !== undefined && endLine !== undefined) {
          const lines = content.split('\n');
          content = lines.slice(startLine, endLine + 1).join('\n');
        }
        
        setCode(content);
        setError(null);
      } catch (err) {
        console.error('Failed to load file:', err);
        setError(`无法加载文件: ${filePath} (${err.message})`);
      }
    };
    
    loadCode();
  }, [filePath, startLine, endLine]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        message.success('代码已复制到剪贴板');
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        message.error('复制失败，请手动复制');
      });
  };

  return (
    <Card
      title={title || '示例代码'}
      extra={
        <Button 
          type="text" 
          icon={copied ? <CheckOutlined /> : <CopyOutlined />} 
          onClick={handleCopy}
          disabled={!!error}
        >
          {copied ? '已复制' : '复制代码'}
        </Button>
      }
      className="code-block-card"
    >
      {error ? (
        <div className="code-error">{error}</div>
      ) : (
        <pre className="code-block">
          <code>{code}</code>
        </pre>
      )}
    </Card>
  );
};

export default AutoCodeBlock;