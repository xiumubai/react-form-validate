import React from 'react';
import { Form, Input, Button, Select, Radio, InputNumber, Typography, Divider, Row, Col } from 'antd';
import CodeBlock from '../../components/CodeBlock';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const RelatedForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('表单提交成功:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('表单提交失败:', errorInfo);
  };

  // 根据支付方式显示不同的表单项
  const PaymentFields = () => {
    const paymentMethod = Form.useWatch('paymentMethod', form);

    if (paymentMethod === 'creditCard') {
      return (
        <>
          <Form.Item
            label="信用卡号"
            name="cardNumber"
            rules={[
              { required: true, message: '请输入信用卡号！' },
              { pattern: /^\d{16}$/, message: '信用卡号必须是16位数字！' }
            ]}
          >
            <Input placeholder="请输入16位信用卡号" />
          </Form.Item>
          <Form.Item
            label="持卡人姓名"
            name="cardHolder"
            rules={[{ required: true, message: '请输入持卡人姓名！' }]}
          >
            <Input placeholder="请输入持卡人姓名" />
          </Form.Item>
          <Form.Item
            label="有效期"
            name="expiryDate"
            rules={[{ required: true, message: '请输入有效期！' }]}
          >
            <Input placeholder="MM/YY" />
          </Form.Item>
          <Form.Item
            label="安全码"
            name="cvv"
            rules={[
              { required: true, message: '请输入安全码！' },
              { pattern: /^\d{3,4}$/, message: '安全码必须是3-4位数字！' }
            ]}
          >
            <Input placeholder="请输入安全码" />
          </Form.Item>
        </>
      );
    } else if (paymentMethod === 'alipay') {
      return (
        <Form.Item
          label="支付宝账号"
          name="alipayAccount"
          rules={[
            { required: true, message: '请输入支付宝账号！' },
            { type: 'email', message: '请输入有效的邮箱地址！' }
          ]}
        >
          <Input placeholder="请输入支付宝账号" />
        </Form.Item>
      );
    } else if (paymentMethod === 'wechat') {
      return (
        <Form.Item
          label="微信号"
          name="wechatId"
          rules={[{ required: true, message: '请输入微信号！' }]}
        >
          <Input placeholder="请输入微信号" />
        </Form.Item>
      );
    }
    
    return null;
  };

  const relatedFormCode = `import React from 'react';
import { Form, Input, Button, Select, Radio, InputNumber } from 'antd';

const { Option } = Select;

const RelatedForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('表单提交成功:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('表单提交失败:', errorInfo);
  };

  // 根据支付方式显示不同的表单项
  const PaymentFields = () => {
    const paymentMethod = Form.useWatch('paymentMethod', form);

    if (paymentMethod === 'creditCard') {
      return (
        <>
          <Form.Item
            label="信用卡号"
            name="cardNumber"
            rules={[
              { required: true, message: '请输入信用卡号！' },
              { pattern: /^\\d{16}$/, message: '信用卡号必须是16位数字！' }
            ]}
          >
            <Input placeholder="请输入16位信用卡号" />
          </Form.Item>
          <Form.Item
            label="持卡人姓名"
            name="cardHolder"
            rules={[{ required: true, message: '请输入持卡人姓名！' }]}
          >
            <Input placeholder="请输入持卡人姓名" />
          </Form.Item>
          <Form.Item
            label="有效期"
            name="expiryDate"
            rules={[{ required: true, message: '请输入有效期！' }]}
          >
            <Input placeholder="MM/YY" />
          </Form.Item>
          <Form.Item
            label="安全码"
            name="cvv"
            rules={[
              { required: true, message: '请输入安全码！' },
              { pattern: /^\\d{3,4}$/, message: '安全码必须是3-4位数字！' }
            ]}
          >
            <Input placeholder="请输入安全码" />
          </Form.Item>
        </>
      );
    } else if (paymentMethod === 'alipay') {
      return (
        <Form.Item
          label="支付宝账号"
          name="alipayAccount"
          rules={[
            { required: true, message: '请输入支付宝账号！' },
            { type: 'email', message: '请输入有效的邮箱地址！' }
          ]}
        >
          <Input placeholder="请输入支付宝账号" />
        </Form.Item>
      );
    } else if (paymentMethod === 'wechat') {
      return (
        <Form.Item
          label="微信号"
          name="wechatId"
          rules={[{ required: true, message: '请输入微信号！' }]}
        >
          <Input placeholder="请输入微信号" />
        </Form.Item>
      );
    }
    
    return null;
  };

  return (
    <Form
      form={form}
      name="related_form"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {/* 商品信息 */}
      <Form.Item
        label="商品名称"
        name="productName"
        rules={[{ required: true, message: '请输入商品名称！' }]}
      >
        <Input placeholder="请输入商品名称" />
      </Form.Item>

      <Form.Item
        label="商品数量"
        name="quantity"
        rules={[
          { required: true, message: '请输入商品数量！' },
          { type: 'number', min: 1, message: '商品数量必须大于0！' }
        ]}
      >
        <InputNumber min={1} placeholder="请输入商品数量" style={{ width: '100%' }} />
      </Form.Item>

      {/* 配送方式 */}
      <Form.Item
        label="配送方式"
        name="deliveryMethod"
        rules={[{ required: true, message: '请选择配送方式！' }]}
      >
        <Select placeholder="请选择配送方式">
          <Option value="express">快递</Option>
          <Option value="pickup">自提</Option>
        </Select>
      </Form.Item>

      {/* 根据配送方式显示不同的表单项 */}
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => 
          prevValues.deliveryMethod !== currentValues.deliveryMethod
        }
      >
        {({ getFieldValue }) => 
          getFieldValue('deliveryMethod') === 'express' ? (
            <Form.Item
              label="收货地址"
              name="address"
              rules={[{ required: true, message: '请输入收货地址！' }]}
            >
              <Input.TextArea placeholder="请输入详细收货地址" rows={3} />
            </Form.Item>
          ) : getFieldValue('deliveryMethod') === 'pickup' ? (
            <Form.Item
              label="自提点"
              name="pickupLocation"
              rules={[{ required: true, message: '请选择自提点！' }]}
            >
              <Select placeholder="请选择自提点">
                <Option value="location1">自提点1</Option>
                <Option value="location2">自提点2</Option>
                <Option value="location3">自提点3</Option>
              </Select>
            </Form.Item>
          ) : null
        }
      </Form.Item>

      {/* 支付方式 */}
      <Form.Item
        label="支付方式"
        name="paymentMethod"
        rules={[{ required: true, message: '请选择支付方式！' }]}
      >
        <Radio.Group>
          <Radio value="creditCard">信用卡</Radio>
          <Radio value="alipay">支付宝</Radio>
          <Radio value="wechat">微信支付</Radio>
        </Radio.Group>
      </Form.Item>

      {/* 根据支付方式显示不同的表单项 */}
      <PaymentFields />

      {/* 提交按钮 */}
      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          提交订单
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RelatedForm;`;

  return (
    <div className="related-form-page">
      <Typography>
        <Title level={2}>表单关联校验</Title>
        <Paragraph>
          表单关联校验用于处理表单项之间存在依赖关系的场景，例如根据用户选择的配送方式或支付方式显示不同的表单项。
          在Ant Design Form中，可以通过Form.useWatch或shouldUpdate属性实现表单项之间的联动。
          下面是一个订单表单的关联校验示例。
        </Paragraph>
      </Typography>

      <Divider orientation="left">示例展示</Divider>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <div className="form-container">
            <Form
              form={form}
              name="related_form"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {/* 商品信息 */}
              <Form.Item
                label="商品名称"
                name="productName"
                rules={[{ required: true, message: '请输入商品名称！' }]}
              >
                <Input placeholder="请输入商品名称" />
              </Form.Item>

              <Form.Item
                label="商品数量"
                name="quantity"
                rules={[
                  { required: true, message: '请输入商品数量！' },
                  { type: 'number', min: 1, message: '商品数量必须大于0！' }
                ]}
              >
                <InputNumber min={1} placeholder="请输入商品数量" style={{ width: '100%' }} />
              </Form.Item>

              {/* 配送方式 */}
              <Form.Item
                label="配送方式"
                name="deliveryMethod"
                rules={[{ required: true, message: '请选择配送方式！' }]}
              >
                <Select placeholder="请选择配送方式">
                  <Option value="express">快递</Option>
                  <Option value="pickup">自提</Option>
                </Select>
              </Form.Item>

              {/* 根据配送方式显示不同的表单项 */}
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => 
                  prevValues.deliveryMethod !== currentValues.deliveryMethod
                }
              >
                {({ getFieldValue }) => 
                  getFieldValue('deliveryMethod') === 'express' ? (
                    <Form.Item
                      label="收货地址"
                      name="address"
                      rules={[{ required: true, message: '请输入收货地址！' }]}
                    >
                      <Input.TextArea placeholder="请输入详细收货地址" rows={3} />
                    </Form.Item>
                  ) : getFieldValue('deliveryMethod') === 'pickup' ? (
                    <Form.Item
                      label="自提点"
                      name="pickupLocation"
                      rules={[{ required: true, message: '请选择自提点！' }]}
                    >
                      <Select placeholder="请选择自提点">
                        <Option value="location1">自提点1</Option>
                        <Option value="location2">自提点2</Option>
                        <Option value="location3">自提点3</Option>
                      </Select>
                    </Form.Item>
                  ) : null
                }
              </Form.Item>

              {/* 支付方式 */}
              <Form.Item
                label="支付方式"
                name="paymentMethod"
                rules={[{ required: true, message: '请选择支付方式！' }]}
              >
                <Radio.Group>
                  <Radio value="creditCard">信用卡</Radio>
                  <Radio value="alipay">支付宝</Radio>
                  <Radio value="wechat">微信支付</Radio>
                </Radio.Group>
              </Form.Item>

              {/* 根据支付方式显示不同的表单项 */}
              <PaymentFields />

              {/* 提交按钮 */}
              <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  提交订单
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={24} lg={12}>
          <Typography>
            <Title level={4}>表单关联校验特点</Title>
            <Paragraph>
              <ul>
                <li><strong>条件渲染</strong>：根据某些字段的值决定是否显示其他字段</li>
                <li><strong>动态校验规则</strong>：根据表单状态动态调整校验规则</li>
                <li><strong>实现方式</strong>：使用Form.useWatch或shouldUpdate实现表单联动</li>
                <li><strong>数据依赖</strong>：表单项之间存在数据依赖关系</li>
              </ul>
            </Paragraph>
            <Title level={4}>应用场景</Title>
            <Paragraph>
              <ul>
                <li>订单表单（配送方式、支付方式联动）</li>
                <li>注册表单（用户类型决定需要填写的信息）</li>
                <li>问卷调查（根据前面的回答显示不同的问题）</li>
                <li>申请表单（根据申请类型显示不同的申请材料）</li>
                <li>配置表单（根据基础配置显示不同的高级配置选项）</li>
              </ul>
            </Paragraph>
          </Typography>
        </Col>
      </Row>

      <Divider orientation="left">代码示例</Divider>
      <CodeBlock code={relatedFormCode} title="表单关联校验代码" />
    </div>
  );
};

export default RelatedForm;