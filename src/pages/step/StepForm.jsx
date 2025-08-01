import React, { useState } from 'react';
import { Form, Input, Button, Steps, Select, InputNumber, DatePicker, Typography, Divider, Row, Col, message } from 'antd';
import CodeBlock from '../../components/CodeBlock';

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { Step } = Steps;

const StepForm = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = [
    {
      title: '基本信息',
      content: 'first-content',
    },
    {
      title: '教育背景',
      content: 'second-content',
    },
    {
      title: '工作经历',
      content: 'third-content',
    },
    {
      title: '完成',
      content: 'last-content',
    },
  ];

  const next = async () => {
    try {
      // 验证当前步骤的表单字段
      const values = await form.validateFields();
      // 合并表单数据
      const newFormData = { ...formData, ...values };
      setFormData(newFormData);
      setCurrent(current + 1);
      // 如果不是最后一步，重置表单字段
      if (current < steps.length - 2) {
        form.resetFields();
      }
    } catch (errorInfo) {
      console.log('表单验证失败:', errorInfo);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
    // 回到上一步时，填充之前的表单数据
    if (current === 1) {
      form.setFieldsValue({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });
    } else if (current === 2) {
      form.setFieldsValue({
        university: formData.university,
        major: formData.major,
        graduationDate: formData.graduationDate,
      });
    }
  };

  const onFinish = () => {
    message.success('表单提交成功！');
    console.log('表单数据:', formData);
  };

  const renderStepContent = () => {
    if (current === 0) {
      return (
        <>
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: '请输入姓名！' }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: '请输入邮箱！' },
              { type: 'email', message: '请输入有效的邮箱地址！' }
            ]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item
            label="手机号码"
            name="phone"
            rules={[
              { required: true, message: '请输入手机号码！' },
              { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号码！' }
            ]}
          >
            <Input placeholder="请输入手机号码" />
          </Form.Item>
        </>
      );
    } else if (current === 1) {
      return (
        <>
          <Form.Item
            label="学校"
            name="university"
            rules={[{ required: true, message: '请输入学校名称！' }]}
          >
            <Input placeholder="请输入学校名称" />
          </Form.Item>
          <Form.Item
            label="专业"
            name="major"
            rules={[{ required: true, message: '请输入专业！' }]}
          >
            <Input placeholder="请输入专业" />
          </Form.Item>
          <Form.Item
            label="学历"
            name="degree"
            rules={[{ required: true, message: '请选择学历！' }]}
          >
            <Select placeholder="请选择学历">
              <Option value="bachelor">本科</Option>
              <Option value="master">硕士</Option>
              <Option value="doctor">博士</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="毕业时间"
            name="graduationDate"
            rules={[{ required: true, message: '请选择毕业时间！' }]}
          >
            <DatePicker style={{ width: '100%' }} placeholder="请选择毕业时间" />
          </Form.Item>
        </>
      );
    } else if (current === 2) {
      return (
        <>
          <Form.Item
            label="公司名称"
            name="company"
            rules={[{ required: true, message: '请输入公司名称！' }]}
          >
            <Input placeholder="请输入公司名称" />
          </Form.Item>
          <Form.Item
            label="职位"
            name="position"
            rules={[{ required: true, message: '请输入职位！' }]}
          >
            <Input placeholder="请输入职位" />
          </Form.Item>
          <Form.Item
            label="工作年限"
            name="workYears"
            rules={[
              { required: true, message: '请输入工作年限！' },
              { type: 'number', min: 0, message: '工作年限不能小于0！' }
            ]}
          >
            <InputNumber min={0} style={{ width: '100%' }} placeholder="请输入工作年限" />
          </Form.Item>
          <Form.Item
            label="工作描述"
            name="jobDescription"
            rules={[{ required: true, message: '请输入工作描述！' }]}
          >
            <Input.TextArea rows={4} placeholder="请输入工作描述" />
          </Form.Item>
        </>
      );
    } else {
      return (
        <div style={{ textAlign: 'center' }}>
          <h3>所有步骤已完成</h3>
          <p>您已成功填写所有信息，点击提交按钮完成申请。</p>
        </div>
      );
    }
  };

  const stepFormCode = `import React, { useState } from 'react';
import { Form, Input, Button, Steps, Select, InputNumber, DatePicker, message } from 'antd';

const { Option } = Select;
const { Step } = Steps;

const StepForm = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = [
    {
      title: '基本信息',
      content: 'first-content',
    },
    {
      title: '教育背景',
      content: 'second-content',
    },
    {
      title: '工作经历',
      content: 'third-content',
    },
    {
      title: '完成',
      content: 'last-content',
    },
  ];

  const next = async () => {
    try {
      // 验证当前步骤的表单字段
      const values = await form.validateFields();
      // 合并表单数据
      const newFormData = { ...formData, ...values };
      setFormData(newFormData);
      setCurrent(current + 1);
      // 如果不是最后一步，重置表单字段
      if (current < steps.length - 2) {
        form.resetFields();
      }
    } catch (errorInfo) {
      console.log('表单验证失败:', errorInfo);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
    // 回到上一步时，填充之前的表单数据
    if (current === 1) {
      form.setFieldsValue({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });
    } else if (current === 2) {
      form.setFieldsValue({
        university: formData.university,
        major: formData.major,
        graduationDate: formData.graduationDate,
      });
    }
  };

  const onFinish = () => {
    message.success('表单提交成功！');
    console.log('表单数据:', formData);
  };

  const renderStepContent = () => {
    if (current === 0) {
      return (
        <>
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: '请输入姓名！' }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: '请输入邮箱！' },
              { type: 'email', message: '请输入有效的邮箱地址！' }
            ]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item
            label="手机号码"
            name="phone"
            rules={[
              { required: true, message: '请输入手机号码！' },
              { pattern: /^1[3-9]\\d{9}$/, message: '请输入有效的手机号码！' }
            ]}
          >
            <Input placeholder="请输入手机号码" />
          </Form.Item>
        </>
      );
    } else if (current === 1) {
      return (
        <>
          <Form.Item
            label="学校"
            name="university"
            rules={[{ required: true, message: '请输入学校名称！' }]}
          >
            <Input placeholder="请输入学校名称" />
          </Form.Item>
          <Form.Item
            label="专业"
            name="major"
            rules={[{ required: true, message: '请输入专业！' }]}
          >
            <Input placeholder="请输入专业" />
          </Form.Item>
          <Form.Item
            label="学历"
            name="degree"
            rules={[{ required: true, message: '请选择学历！' }]}
          >
            <Select placeholder="请选择学历">
              <Option value="bachelor">本科</Option>
              <Option value="master">硕士</Option>
              <Option value="doctor">博士</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="毕业时间"
            name="graduationDate"
            rules={[{ required: true, message: '请选择毕业时间！' }]}
          >
            <DatePicker style={{ width: '100%' }} placeholder="请选择毕业时间" />
          </Form.Item>
        </>
      );
    } else if (current === 2) {
      return (
        <>
          <Form.Item
            label="公司名称"
            name="company"
            rules={[{ required: true, message: '请输入公司名称！' }]}
          >
            <Input placeholder="请输入公司名称" />
          </Form.Item>
          <Form.Item
            label="职位"
            name="position"
            rules={[{ required: true, message: '请输入职位！' }]}
          >
            <Input placeholder="请输入职位" />
          </Form.Item>
          <Form.Item
            label="工作年限"
            name="workYears"
            rules={[
              { required: true, message: '请输入工作年限！' },
              { type: 'number', min: 0, message: '工作年限不能小于0！' }
            ]}
          >
            <InputNumber min={0} style={{ width: '100%' }} placeholder="请输入工作年限" />
          </Form.Item>
          <Form.Item
            label="工作描述"
            name="jobDescription"
            rules={[{ required: true, message: '请输入工作描述！' }]}
          >
            <Input.TextArea rows={4} placeholder="请输入工作描述" />
          </Form.Item>
        </>
      );
    } else {
      return (
        <div style={{ textAlign: 'center' }}>
          <h3>所有步骤已完成</h3>
          <p>您已成功填写所有信息，点击提交按钮完成申请。</p>
        </div>
      );
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div style={{ marginTop: 24, padding: 24, backgroundColor: '#fff', borderRadius: 4 }}>
        <Form
          form={form}
          name="step_form"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          autoComplete="off"
        >
          {renderStepContent()}
        </Form>

        <div style={{ marginTop: 24, textAlign: 'right' }}>
          {current > 0 && (
            <Button style={{ marginRight: 8 }} onClick={prev}>
              上一步
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              下一步
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={onFinish}>
              提交
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepForm;`;

  return (
    <div className="step-form-page">
      <Typography>
        <Title level={2}>分步表单校验</Title>
        <Paragraph>
          分步表单校验用于将复杂的表单拆分成多个步骤，每个步骤只显示部分表单项，用户可以逐步完成表单填写。
          这种方式适用于表单项较多、信息复杂的场景，可以降低用户填写表单的心理负担。
          下面是一个简历填写的分步表单示例，包含基本信息、教育背景和工作经历三个步骤。
        </Paragraph>
      </Typography>

      <Divider orientation="left">示例展示</Divider>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <div className="form-container" style={{ backgroundColor: '#fff', padding: 24, borderRadius: 4 }}>
            <Steps current={current} style={{ marginBottom: 24 }}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>

            <Form
              form={form}
              name="step_form"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              autoComplete="off"
            >
              {renderStepContent()}
            </Form>

            <div style={{ marginTop: 24, textAlign: 'right' }}>
              {current > 0 && (
                <Button style={{ marginRight: 8 }} onClick={prev}>
                  上一步
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="primary" onClick={next}>
                  下一步
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={onFinish}>
                  提交
                </Button>
              )}
            </div>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <Typography>
            <Title level={4}>分步表单特点</Title>
            <Paragraph>
              <ul>
                <li><strong>分步展示</strong>：将复杂表单拆分为多个步骤，降低用户填写负担</li>
                <li><strong>逐步验证</strong>：每个步骤单独验证，确保用户可以逐步完成</li>
                <li><strong>数据保存</strong>：在步骤间切换时保存已填写的数据</li>
                <li><strong>进度指示</strong>：通过Steps组件清晰展示当前进度</li>
              </ul>
            </Paragraph>
            <Title level={4}>应用场景</Title>
            <Paragraph>
              <ul>
                <li>注册流程（基本信息、详细信息、验证确认）</li>
                <li>简历填写（个人信息、教育背景、工作经历）</li>
                <li>订单流程（商品选择、收货信息、支付方式）</li>
                <li>问卷调查（多页面问卷）</li>
                <li>申请流程（基本资料、上传材料、确认提交）</li>
              </ul>
            </Paragraph>
          </Typography>
        </Col>
      </Row>

      <Divider orientation="left">代码示例</Divider>
      <CodeBlock code={stepFormCode} title="分步表单校验代码" />
    </div>
  );
};

export default StepForm;