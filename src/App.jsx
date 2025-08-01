import { Form, Input, Button, Select, DatePicker, InputNumber, Checkbox, Switch, message } from 'antd'
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import './App.css'

function App() {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('表单提交成功！');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('表单提交失败，请检查输入！');
  };

  // 自定义校验函数 - 手机号码
  const validatePhone = (_, value) => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!value || phoneRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('请输入有效的11位手机号码！'));
  };

  // 自定义校验函数 - 密码强度
  const validatePassword = (_, value) => {
    if (!value) {
      return Promise.resolve();
    }
    if (value.length < 8) {
      return Promise.reject(new Error('密码长度至少为8位！'));
    }
    if (!/[A-Z]/.test(value)) {
      return Promise.reject(new Error('密码必须包含至少一个大写字母！'));
    }
    if (!/[a-z]/.test(value)) {
      return Promise.reject(new Error('密码必须包含至少一个小写字母！'));
    }
    if (!/\d/.test(value)) {
      return Promise.reject(new Error('密码必须包含至少一个数字！'));
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return Promise.reject(new Error('密码必须包含至少一个特殊字符！'));
    }
    return Promise.resolve();
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Ant Design 表单验证示例</h1>
      
      <Form
        form={form}
        name="validateForm"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        scrollToFirstError
      >
        {/* 基础表单验证 - 用户名 */}
        <Form.Item
          name="username"
          label="用户名"
          rules={[
            { required: true, message: '请输入用户名！' },
            { min: 3, message: '用户名至少3个字符！' },
            { max: 20, message: '用户名最多20个字符！' },
            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字和下划线！' }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
        </Form.Item>

        {/* 密码强度验证 */}
        <Form.Item
          name="password"
          label="密码"
          rules={[
            { required: true, message: '请输入密码！' },
            { validator: validatePassword }
          ]}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" />
        </Form.Item>

        {/* 确认密码验证 */}
        <Form.Item
          name="confirmPassword"
          label="确认密码"
          dependencies={['password']}
          rules={[
            { required: true, message: '请确认密码！' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次输入的密码不一致！'));
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined />} placeholder="请确认密码" />
        </Form.Item>

        {/* 手机号码验证 */}
        <Form.Item
          name="phone"
          label="手机号码"
          rules={[
            { required: true, message: '请输入手机号码！' },
            { validator: validatePhone }
          ]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="请输入手机号码" />
        </Form.Item>

        {/* 邮箱验证 */}
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            { required: true, message: '请输入邮箱！' },
            { type: 'email', message: '请输入有效的邮箱地址！' }
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="请输入邮箱" />
        </Form.Item>

        {/* 数字范围验证 */}
        <Form.Item
          name="age"
          label="年龄"
          rules={[
            { required: true, message: '请输入年龄！' },
            { type: 'number', min: 18, message: '年龄必须大于或等于18岁！' },
            { type: 'number', max: 120, message: '年龄必须小于或等于120岁！' }
          ]}
        >
          <InputNumber min={1} max={120} placeholder="请输入年龄" style={{ width: '100%' }} />
        </Form.Item>

        {/* 下拉选择验证 */}
        <Form.Item
          name="gender"
          label="性别"
          rules={[{ required: true, message: '请选择性别！' }]}
        >
          <Select placeholder="请选择性别">
            <Select.Option value="male">男</Select.Option>
            <Select.Option value="female">女</Select.Option>
            <Select.Option value="other">其他</Select.Option>
          </Select>
        </Form.Item>

        {/* 日期验证 */}
        <Form.Item
          name="birthday"
          label="出生日期"
          rules={[
            { required: true, message: '请选择出生日期！' },
          ]}
        >
          <DatePicker style={{ width: '100%' }} placeholder="请选择出生日期" />
        </Form.Item>

        {/* 兴趣爱好 */}
        <Form.Item
          name="hobbies"
          label="兴趣爱好"
          rules={[
            { required: true, message: '请至少选择一项兴趣爱好！' },
          ]}
        >
          <Checkbox.Group>
            <Checkbox value="reading">阅读</Checkbox>
            <Checkbox value="sports">运动</Checkbox>
            <Checkbox value="music">音乐</Checkbox>
            <Checkbox value="travel">旅行</Checkbox>
            <Checkbox value="cooking">烹饪</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {/* 学历 */}
        <Form.Item
          name="education"
          label="学历"
          rules={[{ required: true, message: '请选择学历！' }]}
        >
          <Select placeholder="请选择学历">
            <Select.Option value="highschool">高中</Select.Option>
            <Select.Option value="college">大专</Select.Option>
            <Select.Option value="bachelor">本科</Select.Option>
            <Select.Option value="master">硕士</Select.Option>
            <Select.Option value="phd">博士</Select.Option>
          </Select>
        </Form.Item>

        {/* 开关验证 */}
        <Form.Item
          name="newsletter"
          label="订阅新闻"
          valuePropName="checked"
        >
          <Switch checkedChildren="是" unCheckedChildren="否" />
        </Form.Item>

        {/* 协议同意验证 */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            { 
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('请阅读并同意协议！')),
            },
          ]}
        >
          <Checkbox>我已阅读并同意<a href="#">服务协议</a>和<a href="#">隐私政策</a></Checkbox>
        </Form.Item>

        {/* 提交按钮 */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            提交表单
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App
