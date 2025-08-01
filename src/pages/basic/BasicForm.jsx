import React from 'react';
import { Form, Input, Button, InputNumber, Select, DatePicker, Radio, Switch, Checkbox, Typography, Divider, Row, Col } from 'antd';
import AutoCodeBlock from '../../components/AutoCodeBlock';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const BasicForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('表单提交成功:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('表单提交失败:', errorInfo);
  };

  // 自定义校验函数 - 手机号码
  const validatePhone = (_, value) => {
    if (!value) {
      return Promise.resolve();
    }
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (phoneRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('请输入有效的手机号码！'));
  };

  // 自定义校验函数 - 密码强度
  const validatePassword = (_, value) => {
    if (!value) {
      return Promise.resolve();
    }
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/.test(value);
    
    if (value.length < 8) {
      return Promise.reject(new Error('密码长度不能少于8位！'));
    }
    
    if (!(hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar)) {
      return Promise.reject(new Error('密码必须包含大小写字母、数字和特殊字符！'));
    }
    
    return Promise.resolve();
  };



  return (
    <div className="basic-form-page">
      <Typography>
        <Title level={2}>基础表单校验</Title>
        <Paragraph>
          基础表单校验是最常见的表单校验场景，包括必填项校验、格式校验、长度/范围校验和自定义校验函数等。
          下面是一个包含多种基础校验规则的表单示例。
        </Paragraph>
      </Typography>

      <Divider orientation="left">示例展示</Divider>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <div className="form-container">
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {/* 用户名验证 */}
              <Form.Item
                name="username"
                label="用户名"
                rules={[
                  { required: true, message: '请输入用户名！' },
                  { min: 3, message: '用户名长度不能少于3位！' },
                  { max: 20, message: '用户名长度不能超过20位！' }
                ]}
              >
                <Input placeholder="请输入用户名" />
              </Form.Item>

              {/* 密码验证 */}
              <Form.Item
                name="password"
                label="密码"
                rules={[
                  { required: true, message: '请输入密码！' },
                  { validator: validatePassword }
                ]}
              >
                <Input.Password placeholder="请输入密码" />
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
              >
                <Input.Password placeholder="请确认密码" />
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
                <Input placeholder="请输入手机号码" />
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
                <Input placeholder="请输入邮箱" />
              </Form.Item>

              {/* 年龄验证 */}
              <Form.Item
                name="age"
                label="年龄"
                rules={[
                  { required: true, message: '请输入年龄！' },
                  { type: 'number', min: 18, message: '年龄必须大于等于18岁！' },
                  { type: 'number', max: 100, message: '年龄必须小于等于100岁！' }
                ]}
              >
                <InputNumber min={1} max={120} placeholder="请输入年龄" style={{ width: '100%' }} />
              </Form.Item>

              {/* 性别验证 */}
              <Form.Item
                name="gender"
                label="性别"
                rules={[{ required: true, message: '请选择性别！' }]}
              >
                <Radio.Group>
                  <Radio value="male">男</Radio>
                  <Radio value="female">女</Radio>
                  <Radio value="other">其他</Radio>
                </Radio.Group>
              </Form.Item>

              {/* 学历验证 */}
              <Form.Item
                name="education"
                label="学历"
                rules={[{ required: true, message: '请选择学历！' }]}
              >
                <Select placeholder="请选择学历">
                  <Option value="high">高中</Option>
                  <Option value="college">大专</Option>
                  <Option value="bachelor">本科</Option>
                  <Option value="master">硕士</Option>
                  <Option value="doctor">博士</Option>
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
                wrapperCol={{ offset: 6, span: 14 }}
              >
                <Checkbox>我已阅读并同意<a href="#">服务协议</a>和<a href="#">隐私政策</a></Checkbox>
              </Form.Item>

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
            <Title level={4}>校验规则说明</Title>
            <Paragraph>
              <ul>
                <li><strong>用户名</strong>：必填，长度3-20位</li>
                <li><strong>密码</strong>：必填，自定义校验（长度≥8位，包含大小写字母、数字和特殊字符）</li>
                <li><strong>确认密码</strong>：必填，与密码一致</li>
                <li><strong>手机号码</strong>：必填，自定义校验（符合中国大陆手机号格式）</li>
                <li><strong>邮箱</strong>：必填，符合邮箱格式</li>
                <li><strong>年龄</strong>：必填，范围18-100</li>
                <li><strong>性别</strong>：必填，单选</li>
                <li><strong>学历</strong>：必填，下拉选择</li>
                <li><strong>订阅新闻</strong>：开关组件</li>
                <li><strong>协议同意</strong>：自定义校验（必须勾选）</li>
              </ul>
            </Paragraph>
          </Typography>
        </Col>
      </Row>

      <Divider orientation="left">代码示例</Divider>
      <AutoCodeBlock filePath="pages/basic/BasicForm.jsx" title="基础表单校验代码" startLine={0} endLine={400} />
    </div>
  );
};

export default BasicForm;