import { PageContainer } from '@ant-design/pro-components';
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Steps,
} from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

const StepForm: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<any>({});

  const steps = [
    {
      title: '基本信息',
      content: 'first-content',
    },
    {
      title: '配置信息',
      content: 'second-content',
    },
    {
      title: '完成',
      content: 'last-content',
    },
  ];

  const next = async () => {
    try {
      const values = await form.validateFields();
      setFormData({ ...formData, ...values });
      setCurrent(current + 1);
    } catch (errorInfo) {
      console.log('验证失败:', errorInfo);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      const finalData = { ...formData, ...values };
      console.log('最终表单数据:', finalData);
      message.success('表单提交成功！');
      setCurrent(current + 1);
    } catch (errorInfo) {
      console.log('验证失败:', errorInfo);
    }
  };

  const renderStepContent = () => {
    switch (current) {
      case 0:
        return (
          <Form form={form} layout="vertical">
            <Form.Item
              label="项目名称"
              name="projectName"
              rules={[{ required: true, message: '请输入项目名称!' }]}
            >
              <Input placeholder="请输入项目名称" />
            </Form.Item>
            <Form.Item
              label="项目描述"
              name="projectDesc"
              rules={[{ required: true, message: '请输入项目描述!' }]}
            >
              <Input.TextArea rows={4} placeholder="请输入项目描述" />
            </Form.Item>
            <Form.Item
              label="负责人"
              name="owner"
              rules={[{ required: true, message: '请选择负责人!' }]}
            >
              <Select placeholder="请选择负责人">
                <Option value="zhang">张三</Option>
                <Option value="li">李四</Option>
                <Option value="wang">王五</Option>
              </Select>
            </Form.Item>
          </Form>
        );
      case 1:
        return (
          <Form form={form} layout="vertical">
            <Form.Item
              label="项目类型"
              name="projectType"
              rules={[{ required: true, message: '请选择项目类型!' }]}
            >
              <Select placeholder="请选择项目类型">
                <Option value="web">Web应用</Option>
                <Option value="mobile">移动应用</Option>
                <Option value="desktop">桌面应用</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="预计工期（天）"
              name="duration"
              rules={[{ required: true, message: '请输入预计工期!' }]}
            >
              <InputNumber min={1} max={365} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              label="预算"
              name="budget"
              rules={[{ required: true, message: '请输入预算!' }]}
            >
              <InputNumber
                min={0}
                formatter={(value) =>
                  `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                parser={(value) => value?.replace(/¥\s?|(,*)/g, '')}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Form>
        );
      case 2:
        return (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: 24, marginBottom: 16 }}>🎉</div>
            <h3>项目创建成功！</h3>
            <p style={{ color: '#666', marginTop: 16 }}>
              项目 "{formData.projectName}"
              已经成功创建，你可以开始进行项目管理了。
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <Card title="分步表单" bordered={false}>
        <Steps current={current} style={{ marginBottom: 40 }}>
          {steps.map((item) => (
            <Steps.Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div style={{ minHeight: 300 }}>{renderStepContent()}</div>

        <div style={{ marginTop: 24, textAlign: 'right' }}>
          {current > 0 && current < steps.length - 1 && (
            <Button style={{ marginRight: 8 }} onClick={prev}>
              上一步
            </Button>
          )}
          {current < steps.length - 2 && (
            <Button type="primary" onClick={next}>
              下一步
            </Button>
          )}
          {current === steps.length - 2 && (
            <Button type="primary" onClick={onFinish}>
              完成
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                setCurrent(0);
                form.resetFields();
                setFormData({});
              }}
            >
              重新开始
            </Button>
          )}
        </div>
      </Card>
    </PageContainer>
  );
};

export default StepForm;
