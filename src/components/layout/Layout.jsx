import React from 'react';
import { Layout as AntLayout, Typography } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const { Sider, Content } = AntLayout;

const Layout = () => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sider width={250} theme="light">
        <Sidebar />
      </Sider>
      <AntLayout>
        <Content style={{ padding: '24px', background: '#fff' }}>
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;