import React from 'react';
import { Form, Input, Button, Space, Typography, Divider, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import CodeBlock from '../../components/CodeBlock';

const { Title, Paragraph } = Typography;

const DynamicForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('表单提交成功:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('表单提交失败:', errorInfo);
  };

  const dynamicFormCode = `import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const DynamicForm = () => {
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
      name="dynamic_form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item
        label="团队名称"
        name="teamName"
        rules={[{ required: true, message: '请输入团队名称！' }]}
      >
        <Input placeholder="请输入团队名称" />
      </Form.Item>

      <Form.List name="members">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space 
                key={key} 
                style={{ display: 'flex', marginBottom: 8 }} 
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'name']}
                  rules={[{ required: true, message: '请输入成员姓名' }]}
                  label="姓名"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                >
                  <Input placeholder="成员姓名" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'position']}
                  rules={[{ required: true, message: '请输入职位' }]}
                  label="职位"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                >
                  <Input placeholder="职位" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'email']}
                  rules={[
                    { required: true, message: '请输入邮箱' },
                    { type: 'email', message: '请输入有效的邮箱地址！' }
                  ]}
                  label="邮箱"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                >
                  <Input placeholder="邮箱" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                添加团队成员
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;`;

  return (
    <div className="dynamic-form-page">
      <Typography>
        <Title level={2}>动态表单校验</Title>
        <Paragraph>
          动态表单校验用于处理数组类型的数据，例如添加多个团队成员、多个联系方式等场景。
          在Ant Design Form中，可以通过Form.List组件实现动态增减表单项的功能。
          下面是一个团队成员管理的动态表单示例。
        </Paragraph>
      </Typography>

      <Divider orientation="left">示例展示</Divider>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <div className="form-container">
            <Form
              form={form}
              name="dynamic_form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
            >
              <Form.Item
                label="团队名称"
                name="teamName"
                rules={[{ required: true, message: '请输入团队名称！' }]}
              >
                <Input placeholder="请输入团队名称" />
              </Form.Item>

              <Form.List name="members">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <div key={key} style={{ marginBottom: 16, border: '1px dashed #d9d9d9', padding: 16, borderRadius: 8 }}>
                        <Form.Item
                          {...restField}
                          name={[name, 'name']}
                          rules={[{ required: true, message: '请输入成员姓名' }]}
                          label="姓名"
                        >
                          <Input placeholder="成员姓名" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'position']}
                          rules={[{ required: true, message: '请输入职位' }]}
                          label="职位"
                        >
                          <Input placeholder="职位" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'email']}
                          rules={[
                            { required: true, message: '请输入邮箱' },
                            { type: 'email', message: '请输入有效的邮箱地址！' }
                          ]}
                          label="邮箱"
                        >
                          <Input placeholder="邮箱" />
                        </Form.Item>
                        <Button 
                          type="text" 
                          danger 
                          icon={<MinusCircleOutlined />} 
                          onClick={() => remove(name)}
                          style={{ marginTop: 8 }}
                        >
                          删除此成员
                        </Button>
                      </div>
                    ))}
                    <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        添加团队成员
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>

              <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  提交
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <Typography>
            <Title level={4}>动态表单特点</Title>
            <Paragraph>
              <ul>
                <li><strong>数据结构</strong>：表单数据为数组类型，每个数组元素可以是对象</li>
                <li><strong>动态操作</strong>：可以动态添加、删除表单项</li>
                <li><strong>字段命名</strong>：使用 <code>Form.List</code> 和数组索引来管理字段</li>
                <li><strong>校验规则</strong>：每个动态项都可以设置独立的校验规则</li>
              </ul>
            </Paragraph>
            <Title level={4}>应用场景</Title>
            <Paragraph>
              <ul>
                <li>团队成员管理表单</li>
                <li>多联系人信息表单</li>
                <li>订单中的多商品表单</li>
                <li>教育经历/工作经历表单</li>
                <li>多地址管理表单</li>
                <li>问卷调查中的多选项设置</li>
              </ul>
            </Paragraph>
          </Typography>
        </Col>
      </Row>

      <Divider orientation="left">代码示例</Divider>
      <CodeBlock code={dynamicFormCode} title="动态表单校验代码" />
    </div>
  );
};

export default DynamicForm;