import React from 'react';
import { Menu, Typography, Layout as AntLayout, } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  FormOutlined,
  AppstoreOutlined,
  BarsOutlined,
  LinkOutlined,
  StepForwardOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import reactLogo from '../../assets/react.svg';
const { Header } = AntLayout;

const Sidebar = () => {
  const location = useLocation();
  const selectedKey = location.pathname;

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">首页</Link>,
    },
    {
      key: '/basic',
      icon: <FormOutlined />,
      label: <Link to="/basic">基础表单校验</Link>,
    },
    {
      key: '/nested',
      icon: <AppstoreOutlined />,
      label: <Link to="/nested">嵌套表单校验</Link>,
    },
    {
      key: '/dynamic',
      icon: <BarsOutlined />,
      label: <Link to="/dynamic">循环列表校验</Link>,
    },
    {
      key: '/related',
      icon: <LinkOutlined />,
      label: <Link to="/related">表单关联校验</Link>,
    },
    {
      key: '/step',
      icon: <StepForwardOutlined />,
      label: <Link to="/step">分步表单校验</Link>,
    },
  ];

  return (
    <div className="sidebar" style={{ height: '100vh', position: 'fixed', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)' }}>
      <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={reactLogo} alt="React Logo" style={{ height: '32px', marginRight: '12px' }} />
          <Typography.Title level={4} style={{ margin: 0 }}>
            <span style={{ color: '#1890ff' }}>React</span> 表单校验
          </Typography.Title>
        </div>
      </Header>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        items={menuItems}
        style={{ height: '100%', borderRight: 0 }}
      />
    </div>
  );
};

export default Sidebar;