import React from 'react';
import { Form, Input, Button, Card, Typography, Divider, Row, Col } from 'antd';
import CodeBlock from '../../components/CodeBlock';

const { Title, Paragraph } = Typography;

const NestedForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('表单提交成功:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('表单提交失败:', errorInfo);
  };

  const nestedFormCode = `import React from 'react';
import { Form, Input, Button, Card } from 'antd';

const NestedForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('表单提交成功:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('表单提交失败:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="nested"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {/* 基本信息 */}
      <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请输入姓名！' }]}>
        <Input placeholder="请输入姓名" />
      </Form.Item>

      {/* 嵌套对象 - 地址信息 */}
      <Card title="地址信息" style={{ marginBottom: 24 }}>
        <Form.Item
          label="省份"
          name={['address', 'province']}
          rules={[{ required: true, message: '请输入省份！' }]}
        >
          <Input placeholder="请输入省份" />
        </Form.Item>

        <Form.Item
          label="城市"
          name={['address', 'city']}
          rules={[{ required: true, message: '请输入城市！' }]}
        >
          <Input placeholder="请输入城市" />
        </Form.Item>

        <Form.Item
          label="详细地址"
          name={['address', 'street']}
          rules={[{ required: true, message: '请输入详细地址！' }]}
        >
          <Input placeholder="请输入详细地址" />
        </Form.Item>

        <Form.Item
          label="邮政编码"
          name={['address', 'zipCode']}
          rules={[
            { required: true, message: '请输入邮政编码！' },
            { pattern: /^\\d{6}$/, message: '邮政编码必须是6位数字！' }
          ]}
        >
          <Input placeholder="请输入邮政编码" />
        </Form.Item>
      </Card>

      {/* 嵌套对象 - 联系方式 */}
      <Card title="联系方式" style={{ marginBottom: 24 }}>
        <Form.Item
          label="电话"
          name={['contact', 'phone']}
          rules={[
            { required: true, message: '请输入电话号码！' },
            { pattern: /^1[3-9]\\d{9}$/, message: '请输入有效的手机号码！' }
          ]}
        >
          <Input placeholder="请输入电话号码" />
        </Form.Item>

        <Form.Item
          label="邮箱"
          name={['contact', 'email']}
          rules={[
            { required: true, message: '请输入邮箱！' },
            { type: 'email', message: '请输入有效的邮箱地址！' }
          ]}
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>

        <Form.Item
          label="微信"
          name={['contact', 'wechat']}
        >
          <Input placeholder="请输入微信号" />
        </Form.Item>
      </Card>

      {/* 提交按钮 */}
      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          提交表单
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NestedForm;`;

  return (
    <div className="nested-form-page">
      <Typography>
        <Title level={2}>嵌套表单校验</Title>
        <Paragraph>
          嵌套表单校验用于处理具有层级结构的数据，例如对象嵌套对象的情况。在Ant Design Form中，可以通过数组形式的name属性来指定嵌套字段的路径。
          下面是一个包含地址信息和联系方式两个嵌套对象的表单示例。
        </Paragraph>
      </Typography>

      <Divider orientation="left">示例展示</Divider>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <div className="form-container">
            <Form
              form={form}
              name="nested"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {/* 基本信息 */}
              <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请输入姓名！' }]}>
                <Input placeholder="请输入姓名" />
              </Form.Item>

              {/* 嵌套对象 - 地址信息 */}
              <Card title="地址信息" style={{ marginBottom: 24 }}>
                <Form.Item
                  label="省份"
                  name={['address', 'province']}
                  rules={[{ required: true, message: '请输入省份！' }]}
                >
                  <Input placeholder="请输入省份" />
                </Form.Item>

                <Form.Item
                  label="城市"
                  name={['address', 'city']}
                  rules={[{ required: true, message: '请输入城市！' }]}
                >
                  <Input placeholder="请输入城市" />
                </Form.Item>

                <Form.Item
                  label="详细地址"
                  name={['address', 'street']}
                  rules={[{ required: true, message: '请输入详细地址！' }]}
                >
                  <Input placeholder="请输入详细地址" />
                </Form.Item>

                <Form.Item
                  label="邮政编码"
                  name={['address', 'zipCode']}
                  rules={[
                    { required: true, message: '请输入邮政编码！' },
                    { pattern: /^\d{6}$/, message: '邮政编码必须是6位数字！' }
                  ]}
                >
                  <Input placeholder="请输入邮政编码" />
                </Form.Item>
              </Card>

              {/* 嵌套对象 - 联系方式 */}
              <Card title="联系方式" style={{ marginBottom: 24 }}>
                <Form.Item
                  label="电话"
                  name={['contact', 'phone']}
                  rules={[
                    { required: true, message: '请输入电话号码！' },
                    { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号码！' }
                  ]}
                >
                  <Input placeholder="请输入电话号码" />
                </Form.Item>

                <Form.Item
                  label="邮箱"
                  name={['contact', 'email']}
                  rules={[
                    { required: true, message: '请输入邮箱！' },
                    { type: 'email', message: '请输入有效的邮箱地址！' }
                  ]}
                >
                  <Input placeholder="请输入邮箱" />
                </Form.Item>

                <Form.Item
                  label="微信"
                  name={['contact', 'wechat']}
                >
                  <Input placeholder="请输入微信号" />
                </Form.Item>
              </Card>

              {/* 提交按钮 */}
              <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  提交表单
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <Typography>
            <Title level={4}>嵌套表单特点</Title>
            <Paragraph>
              <ul>
                <li><strong>数据结构</strong>：表单数据呈现层级结构，如对象中包含对象</li>
                <li><strong>字段命名</strong>：使用数组形式的name属性，如 <code>name={['address', 'province']}</code></li>
                <li><strong>UI组织</strong>：通常使用Card、Collapse等组件对相关字段进行分组</li>
                <li><strong>提交数据</strong>：提交后的数据会自动组织成嵌套对象结构</li>
              </ul>
            </Paragraph>
            <Title level={4}>应用场景</Title>
            <Paragraph>
              <ul>
                <li>用户详细信息表单（基本信息、地址信息、联系方式等）</li>
                <li>订单表单（订单信息、收货地址、支付信息等）</li>
                <li>复杂配置表单（基础配置、高级配置、权限配置等）</li>
                <li>多部分组成的申请表单（个人信息、教育背景、工作经历等）</li>
              </ul>
            </Paragraph>
          </Typography>
        </Col>
      </Row>

      <Divider orientation="left">代码示例</Divider>
      <CodeBlock code={nestedFormCode} title="嵌套表单校验代码" />
    </div>
  );
};

export default NestedForm;