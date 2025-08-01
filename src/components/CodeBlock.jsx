import React, { useState } from 'react';
import { Card, Button, message } from 'antd';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';
import './CodeBlock.css';

const CodeBlock = ({ code, title }) => {
  const [copied, setCopied] = useState(false);

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
        >
          {copied ? '已复制' : '复制代码'}
        </Button>
      }
      className="code-block-card"
    >
      <pre className="code-block">
        <code>{code}</code>
      </pre>
    </Card>
  );
};

export default CodeBlock;