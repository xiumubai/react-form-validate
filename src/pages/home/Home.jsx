import React from 'react';
import { Typography, Row, Col, Card, Button, Space, Divider, List, Tag } from 'antd';
import { Link } from 'react-router-dom';
import {
  FormOutlined,
  AppstoreOutlined,
  BarsOutlined,
  LinkOutlined,
  StepForwardOutlined,
  GithubOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  CopyOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import reactLogo from '../../assets/react.svg';
import './Home.css';

const { Title, Paragraph, Text } = Typography;

const features = [
  {
    icon: <FormOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: '多种表单校验场景',
    description: '涵盖基础、嵌套、动态、关联和分步等多种表单校验场景',
  },
  {
    icon: <CodeOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: '详细的代码示例',
    description: '每个场景都提供完整的代码示例和详细说明',
  },
  {
    icon: <CopyOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: '可复制的模板代码',
    description: '一键复制代码到自己的项目中使用',
  },
  {
    icon: <MobileOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    title: '响应式设计',
    description: '适配各种设备，提供良好的浏览体验',
  },
];

const scenarios = [
  {
    title: '基础表单校验',
    icon: <FormOutlined />,
    path: '/basic',
    description: '必填项、格式、长度/范围、自定义校验函数',
    color: '#1890ff',
  },
  {
    title: '嵌套表单校验',
    icon: <AppstoreOutlined />,
    path: '/nested',
    description: '对象嵌套校验、动态嵌套表单',
    color: '#52c41a',
  },
  {
    title: '循环列表校验',
    icon: <BarsOutlined />,
    path: '/dynamic',
    description: '动态增减表单项',
    color: '#faad14',
  },
  {
    title: '表单关联校验',
    icon: <LinkOutlined />,
    path: '/related',
    description: '字段间的联动校验',
    color: '#eb2f96',
  },
  {
    title: '分步表单校验',
    icon: <StepForwardOutlined />,
    path: '/step',
    description: '多步骤表单',
    color: '#722ed1',
  },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <Row gutter={[24, 24]} align="middle" justify="center">
          <Col xs={24} md={12}>
            <div className="hero-content">
              <div className="logo-container">
                <img src={reactLogo} alt="React Logo" className="react-logo" />
                <Title level={1}>
                  <span className="title-highlight">React</span> 表单校验
                </Title>
              </div>
              <Paragraph className="hero-description">
                基于 React + Vite + Ant Design 4.x 构建的表单校验文档网站，
                展示各种表单校验场景和最佳实践，帮助开发者快速掌握表单校验技巧。
              </Paragraph>
              <Space size="large">
                <Link to="/basic">
                  <Button type="primary" size="large" icon={<FormOutlined />}>
                    开始探索
                  </Button>
                </Link>
                <a href="https://github.com/xiumubai/react-form-validate" target="_blank" rel="noopener noreferrer">
                  <Button size="large" icon={<GithubOutlined />}>
                    GitHub 仓库
                  </Button>
                </a>
              </Space>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="hero-image">
              <div className="code-preview">
                <pre>
                  <code>
{`// 基础表单校验示例
import { Form, Input, Button } from 'antd';

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: '请输入邮箱!' },
          { type: 'email', message: '请输入有效的邮箱!' }
        ]}
      >
        <Input placeholder="邮箱" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};`}
                  </code>
                </pre>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Features Section */}
      <div className="section">
        <Title level={2} className="section-title">功能特点</Title>
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card className="feature-card" hoverable>
                <div className="feature-icon">{feature.icon}</div>
                <Title level={4}>{feature.title}</Title>
                <Paragraph>{feature.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Divider />

      {/* Scenarios Section */}
      <div className="section">
        <Title level={2} className="section-title">表单校验场景</Title>
        <List
          grid={{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
          dataSource={scenarios}
          renderItem={(item) => (
            <List.Item>
              <Link to={item.path}>
                <Card 
                  className="scenario-card" 
                  hoverable 
                  title={
                    <Space>
                      <span className="scenario-icon" style={{ color: item.color }}>{item.icon}</span>
                      {item.title}
                    </Space>
                  }
                >
                  <Paragraph>{item.description}</Paragraph>
                  <div className="scenario-footer">
                    <Button type="link">查看详情</Button>
                  </div>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </div>

      {/* Tech Stack Section */}
      <div className="section tech-stack">
        <Title level={2} className="section-title">技术栈</Title>
        <Row justify="center">
          <Col>
            <Space size="large" wrap>
              <Tag color="#61dafb" className="tech-tag">React 19</Tag>
              <Tag color="#646cff" className="tech-tag">Vite 7</Tag>
              <Tag color="#1890ff" className="tech-tag">Ant Design 4.x</Tag>
              <Tag color="#ca4245" className="tech-tag">React Router 7</Tag>
              <Tag color="#026e00" className="tech-tag">Node.js 22+</Tag>
            </Space>
          </Col>
        </Row>
      </div>

      {/* Getting Started Section */}
      <div className="section getting-started">
        <Title level={2} className="section-title">快速开始</Title>
        <Row justify="center">
          <Col xs={24} md={16}>
            <Card className="getting-started-card">
              <Steps>
                <Step title="克隆仓库" description="从GitHub克隆或下载本项目" />
                <Step title="安装依赖" description="运行 npm install 安装所需依赖" />
                <Step title="启动项目" description="运行 npm run dev 启动开发服务器" />
                <Step title="开始使用" description="在浏览器中访问并开始探索" />
              </Steps>
              <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <a href="https://github.com/xiumubai/react-form-validate" target="_blank" rel="noopener noreferrer">
                  <Button type="primary" icon={<GithubOutlined />}>
                    前往 GitHub 仓库
                  </Button>
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const Steps = ({ children }) => {
  return <div className="custom-steps">{children}</div>;
};

const Step = ({ title, description }) => {
  return (
    <div className="custom-step">
      <div className="step-icon">
        <CheckCircleOutlined />
      </div>
      <div className="step-content">
        <div className="step-title">{title}</div>
        <div className="step-description">{description}</div>
      </div>
    </div>
  );
};

export default Home;