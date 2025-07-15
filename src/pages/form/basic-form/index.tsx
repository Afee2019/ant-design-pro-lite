import { PageContainer } from '@ant-design/pro-components';
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  message,
  Select,
  Switch,
} from 'antd';
import React from 'react';

const { Option } = Select;
const { TextArea } = Input;

const BasicForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('表单数据:', values);
    message.success('提交成功！');
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <PageContainer>
      <Card title="基础表单" bordered={false}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            status: 'active',
            public: true,
          }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入标题!' }]}
          >
            <Input placeholder="请输入标题" />
          </Form.Item>

          <Form.Item
            label="描述"
            name="description"
            rules={[{ required: true, message: '请输入描述!' }]}
          >
            <TextArea rows={4} placeholder="请输入描述" />
          </Form.Item>

          <Form.Item
            label="所属分类"
            name="category"
            rules={[{ required: true, message: '请选择分类!' }]}
          >
            <Select placeholder="请选择分类">
              <Option value="tech">技术</Option>
              <Option value="business">商务</Option>
              <Option value="design">设计</Option>
              <Option value="other">其他</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="开始时间"
            name="startDate"
            rules={[{ required: true, message: '请选择开始时间!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="结束时间" name="endDate">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="状态" name="status">
            <Select>
              <Option value="active">激活</Option>
              <Option value="inactive">未激活</Option>
              <Option value="pending">待处理</Option>
            </Select>
          </Form.Item>

          <Form.Item label="是否公开" name="public" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
              提交
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
