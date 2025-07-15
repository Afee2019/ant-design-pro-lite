import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Switch,
  Upload,
} from 'antd';
import React from 'react';

const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const AdvancedForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('高级表单数据:', values);
    message.success('提交成功！');
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <PageContainer>
      <Card title="高级表单" bordered={false}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            status: 'draft',
            priority: 'medium',
            public: false,
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="项目名称"
                name="projectName"
                rules={[{ required: true, message: '请输入项目名称!' }]}
              >
                <Input placeholder="请输入项目名称" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="项目编号"
                name="projectCode"
                rules={[{ required: true, message: '请输入项目编号!' }]}
              >
                <Input placeholder="请输入项目编号" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="项目描述"
            name="description"
            rules={[{ required: true, message: '请输入项目描述!' }]}
          >
            <TextArea rows={4} placeholder="请详细描述项目内容" />
          </Form.Item>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="项目状态"
                name="status"
                rules={[{ required: true, message: '请选择项目状态!' }]}
              >
                <Select>
                  <Option value="draft">草稿</Option>
                  <Option value="pending">待审核</Option>
                  <Option value="approved">已通过</Option>
                  <Option value="rejected">已拒绝</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="优先级"
                name="priority"
                rules={[{ required: true, message: '请选择优先级!' }]}
              >
                <Select>
                  <Option value="low">低</Option>
                  <Option value="medium">中</Option>
                  <Option value="high">高</Option>
                  <Option value="urgent">紧急</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="预算（万元）" name="budget">
                <InputNumber
                  min={0}
                  precision={2}
                  style={{ width: '100%' }}
                  placeholder="请输入预算"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="项目周期"
                name="dateRange"
                rules={[{ required: true, message: '请选择项目周期!' }]}
              >
                <RangePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="负责人"
                name="owner"
                rules={[{ required: true, message: '请选择负责人!' }]}
              >
                <Select placeholder="请选择负责人">
                  <Option value="zhang">张三</Option>
                  <Option value="li">李四</Option>
                  <Option value="wang">王五</Option>
                  <Option value="zhao">赵六</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider orientation="left">团队成员</Divider>

          <Form.List name="members">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Row key={key} gutter={16} align="middle">
                    <Col span={8}>
                      <Form.Item
                        {...restField}
                        name={[name, 'name']}
                        rules={[{ required: true, message: '请输入成员姓名' }]}
                      >
                        <Input placeholder="成员姓名" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        {...restField}
                        name={[name, 'role']}
                        rules={[{ required: true, message: '请选择角色' }]}
                      >
                        <Select placeholder="请选择角色">
                          <Option value="developer">开发</Option>
                          <Option value="designer">设计</Option>
                          <Option value="tester">测试</Option>
                          <Option value="pm">产品经理</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item {...restField} name={[name, 'workload']}>
                        <InputNumber
                          placeholder="工作量(%)"
                          min={0}
                          max={100}
                          style={{ width: '100%' }}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={2}>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    添加成员
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Divider orientation="left">附件上传</Divider>

          <Form.Item
            label="项目文档"
            name="documents"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="documents" action="/upload" listType="text">
              <Button icon={<UploadOutlined />}>点击上传</Button>
            </Upload>
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="是否公开" name="public" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="接收邮件通知"
                name="emailNotification"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item style={{ marginTop: 32 }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ marginRight: 8 }}
            >
              提交表单
            </Button>
            <Button size="large" onClick={() => form.resetFields()}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default AdvancedForm;
