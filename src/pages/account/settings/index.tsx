import {
  BellOutlined,
  DeleteOutlined,
  SafetyOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Alert,
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  List,
  Modal,
  message,
  Row,
  Select,
  Switch,
  Tabs,
  Upload,
} from 'antd';
import React, { useState } from 'react';

const { Option } = Select;
const { TextArea } = Input;

const AccountSettings: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [bindingDevices, setBindingDevices] = useState([
    {
      id: 1,
      name: 'iPhone 13 Pro',
      type: 'mobile',
      lastLogin: '2024-01-15 14:30',
      location: '杭州',
    },
    {
      id: 2,
      name: 'MacBook Pro',
      type: 'computer',
      lastLogin: '2024-01-15 09:20',
      location: '杭州',
    },
    {
      id: 3,
      name: 'Chrome Browser',
      type: 'browser',
      lastLogin: '2024-01-14 16:45',
      location: '上海',
    },
  ]);

  const handleBasicSubmit = async (values: any) => {
    setLoading(true);
    try {
      console.log('基本信息:', values);
      message.success('基本信息更新成功！');
    } catch (_error) {
      message.error('更新失败，请重试！');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (values: any) => {
    if (values.newPassword !== values.confirmPassword) {
      message.error('两次输入的密码不一致！');
      return;
    }
    setLoading(true);
    try {
      console.log('密码修改:', values);
      message.success('密码修改成功！');
      form.resetFields(['oldPassword', 'newPassword', 'confirmPassword']);
    } catch (_error) {
      message.error('密码修改失败，请重试！');
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationChange = (key: string, checked: boolean) => {
    console.log(`${key}: ${checked}`);
    message.success('通知设置已更新');
  };

  const handleUnbindDevice = (deviceId: number) => {
    Modal.confirm({
      title: '确认解绑',
      content: '解绑后该设备将无法访问您的账户，确认解绑吗？',
      onOk: () => {
        setBindingDevices((prev) =>
          prev.filter((device) => device.id !== deviceId),
        );
        message.success('设备解绑成功');
      },
    });
  };

  const handleDeleteAccount = () => {
    Modal.confirm({
      title: '危险操作',
      content:
        '删除账户将永久删除您的所有数据，此操作无法撤销。请输入您的密码确认。',
      okText: '确认删除',
      okType: 'danger',
      onOk: () => {
        message.success('账户删除申请已提交，客服将在24小时内联系您');
      },
    });
  };

  const basicInfoTab = (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleBasicSubmit}
      initialValues={{
        name: '张三',
        email: 'zhangsan@example.com',
        phone: '138-1234-5678',
        nickname: 'zhangsan',
        signature: '海纳百川，有容乃大',
        country: 'china',
        province: 'zhejiang',
        city: 'hangzhou',
        address: '西湖区某某街道某某号',
      }}
    >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="头像">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Avatar
                size={80}
                src="https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png"
              />
              <Upload showUploadList={false}>
                <Button icon={<UploadOutlined />}>更换头像</Button>
              </Upload>
            </div>
          </Form.Item>
        </Col>
        <Col span={16}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="姓名"
                name="name"
                rules={[{ required: true, message: '请输入姓名!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="昵称"
                name="nickname"
                rules={[{ required: true, message: '请输入昵称!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: '请输入邮箱!' },
              { type: 'email', message: '请输入有效的邮箱地址!' },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="手机号"
            name="phone"
            rules={[{ required: true, message: '请输入手机号!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="个人简介" name="signature">
        <TextArea rows={4} placeholder="请输入个人简介" />
      </Form.Item>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="国家/地区" name="country">
            <Select>
              <Option value="china">中国</Option>
              <Option value="usa">美国</Option>
              <Option value="japan">日本</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="所在省市" name="province">
            <Select>
              <Option value="zhejiang">浙江省</Option>
              <Option value="beijing">北京市</Option>
              <Option value="shanghai">上海市</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="所在城市" name="city">
            <Select>
              <Option value="hangzhou">杭州市</Option>
              <Option value="ningbo">宁波市</Option>
              <Option value="wenzhou">温州市</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="街道地址" name="address">
        <Input placeholder="请输入详细地址" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          更新基本信息
        </Button>
      </Form.Item>
    </Form>
  );

  const securityTab = (
    <div>
      <Card title="修改密码" size="small" style={{ marginBottom: 24 }}>
        <Form layout="vertical" onFinish={handlePasswordSubmit}>
          <Form.Item
            label="当前密码"
            name="oldPassword"
            rules={[{ required: true, message: '请输入当前密码!' }]}
          >
            <Input.Password placeholder="请输入当前密码" />
          </Form.Item>
          <Form.Item
            label="新密码"
            name="newPassword"
            rules={[
              { required: true, message: '请输入新密码!' },
              { min: 6, message: '密码长度至少6位!' },
            ]}
          >
            <Input.Password placeholder="请输入新密码" />
          </Form.Item>
          <Form.Item
            label="确认新密码"
            name="confirmPassword"
            rules={[{ required: true, message: '请确认新密码!' }]}
          >
            <Input.Password placeholder="请再次输入新密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              修改密码
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="两步验证" size="small" style={{ marginBottom: 24 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <div>
            <div style={{ fontWeight: 'bold' }}>短信验证</div>
            <div style={{ color: '#666', fontSize: 12 }}>
              绑定手机：138****5678
            </div>
          </div>
          <Switch defaultChecked />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <div>
            <div style={{ fontWeight: 'bold' }}>邮箱验证</div>
            <div style={{ color: '#666', fontSize: 12 }}>
              绑定邮箱：zhan****@example.com
            </div>
          </div>
          <Switch />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ fontWeight: 'bold' }}>Google验证器</div>
            <div style={{ color: '#666', fontSize: 12 }}>
              使用Google验证器进行二次验证
            </div>
          </div>
          <Switch />
        </div>
      </Card>

      <Card title="登录设备" size="small" style={{ marginBottom: 24 }}>
        <List
          dataSource={bindingDevices}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  key="unbind"
                  size="small"
                  danger
                  onClick={() => handleUnbindDevice(item.id)}
                >
                  解绑
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar style={{ backgroundColor: '#1890ff' }}>
                    {item.type === 'mobile'
                      ? '📱'
                      : item.type === 'computer'
                        ? '💻'
                        : '🌐'}
                  </Avatar>
                }
                title={item.name}
                description={
                  <div>
                    <div>最后登录：{item.lastLogin}</div>
                    <div>登录地点：{item.location}</div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );

  const notificationTab = (
    <Card title="通知设置" size="small">
      <div style={{ marginBottom: 24 }}>
        <h4>系统通知</h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span>系统消息</span>
          <Switch
            defaultChecked
            onChange={(checked) => handleNotificationChange('system', checked)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span>安全通知</span>
          <Switch
            defaultChecked
            onChange={(checked) =>
              handleNotificationChange('security', checked)
            }
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span>系统维护通知</span>
          <Switch
            onChange={(checked) =>
              handleNotificationChange('maintenance', checked)
            }
          />
        </div>
      </div>

      <Divider />

      <div style={{ marginBottom: 24 }}>
        <h4>邮件通知</h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span>每日总结邮件</span>
          <Switch
            defaultChecked
            onChange={(checked) => handleNotificationChange('daily', checked)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span>周报邮件</span>
          <Switch
            onChange={(checked) => handleNotificationChange('weekly', checked)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span>营销邮件</span>
          <Switch
            onChange={(checked) =>
              handleNotificationChange('marketing', checked)
            }
          />
        </div>
      </div>

      <Divider />

      <div>
        <h4>手机通知</h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span>重要消息推送</span>
          <Switch
            defaultChecked
            onChange={(checked) => handleNotificationChange('sms', checked)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <span>登录异常通知</span>
          <Switch
            defaultChecked
            onChange={(checked) =>
              handleNotificationChange('loginAlert', checked)
            }
          />
        </div>
      </div>
    </Card>
  );

  const dangerTab = (
    <Card title="危险操作" size="small">
      <Alert
        message="注意"
        description="以下操作具有危险性，请谨慎操作。某些操作无法撤销。"
        type="warning"
        showIcon
        style={{ marginBottom: 24 }}
      />

      <div style={{ marginBottom: 24 }}>
        <h4>删除账户</h4>
        <p style={{ color: '#666', marginBottom: 16 }}>
          删除账户将永久删除您的所有数据，包括项目、文件、设置等。此操作无法撤销。
        </p>
        <Button danger icon={<DeleteOutlined />} onClick={handleDeleteAccount}>
          删除我的账户
        </Button>
      </div>

      <Divider />

      <div>
        <h4>清空数据</h4>
        <p style={{ color: '#666', marginBottom: 16 }}>
          清空所有个人数据，但保留账户。您可以重新开始使用。
        </p>
        <Button danger>清空所有数据</Button>
      </div>
    </Card>
  );

  const tabItems = [
    {
      key: 'basic',
      label: (
        <span>
          <UserOutlined />
          基本设置
        </span>
      ),
      children: basicInfoTab,
    },
    {
      key: 'security',
      label: (
        <span>
          <SafetyOutlined />
          安全设置
        </span>
      ),
      children: securityTab,
    },
    {
      key: 'notification',
      label: (
        <span>
          <BellOutlined />
          通知设置
        </span>
      ),
      children: notificationTab,
    },
    {
      key: 'danger',
      label: (
        <span>
          <DeleteOutlined />
          危险操作
        </span>
      ),
      children: dangerTab,
    },
  ];

  return (
    <PageContainer>
      <Card title="个人设置" bordered={false}>
        <Tabs items={tabItems} />
      </Card>
    </PageContainer>
  );
};

export default AccountSettings;
