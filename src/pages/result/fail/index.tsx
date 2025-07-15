import {
  CloseCircleOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Alert,
  Button,
  Card,
  Descriptions,
  Result,
  Timeline,
  Typography,
} from 'antd';
import React from 'react';

const { Paragraph, Text } = Typography;

const Fail: React.FC = () => {
  const errorInfo = {
    orderNumber: 'ORDER-2024011502',
    amount: '¥1,299.00',
    errorCode: 'PAYMENT_FAILED_001',
    errorMessage: '支付超时，请重新支付',
    failTime: '2024-01-15 15:45:30',
    errorType: '支付超时',
    suggestion: '建议检查网络连接后重新尝试支付',
  };

  const troubleSteps = [
    {
      color: 'red',
      children: (
        <div>
          <strong>支付失败</strong>
          <p style={{ margin: '4px 0', color: '#666' }}>{errorInfo.failTime}</p>
          <p style={{ margin: 0, color: '#666' }}>
            错误原因：{errorInfo.errorMessage}
          </p>
        </div>
      ),
    },
    {
      color: 'blue',
      children: (
        <div>
          <strong>订单保留</strong>
          <p style={{ margin: '4px 0', color: '#666' }}>订单已为您保留30分钟</p>
          <p style={{ margin: 0, color: '#666' }}>请在此时间内完成支付</p>
        </div>
      ),
    },
    {
      color: 'gray',
      children: (
        <div>
          <strong>待重新支付</strong>
          <p style={{ margin: '4px 0', color: '#666' }}>
            请点击下方按钮重新支付
          </p>
          <p style={{ margin: 0, color: '#666' }}>或联系客服获得帮助</p>
        </div>
      ),
    },
  ];

  const handleRetryPayment = () => {
    console.log('重新支付');
  };

  const handleContactService = () => {
    console.log('联系客服');
  };

  const handleBackHome = () => {
    console.log('返回首页');
  };

  const handleViewOrder = () => {
    console.log('查看订单');
  };

  return (
    <PageContainer>
      <Card bordered={false}>
        <Result
          status="error"
          title="支付失败"
          subTitle={
            <div>
              <Paragraph>
                订单号：<Text strong>{errorInfo.orderNumber}</Text>
              </Paragraph>
              <Paragraph>
                支付金额：
                <Text strong style={{ fontSize: 16 }}>
                  {errorInfo.amount}
                </Text>
              </Paragraph>
              <Paragraph type="secondary">
                {errorInfo.errorMessage}，错误代码：{errorInfo.errorCode}
              </Paragraph>
            </div>
          }
          extra={[
            <Button
              type="primary"
              key="retry"
              icon={<ReloadOutlined />}
              onClick={handleRetryPayment}
            >
              重新支付
            </Button>,
            <Button
              key="service"
              icon={<CustomerServiceOutlined />}
              onClick={handleContactService}
            >
              联系客服
            </Button>,
            <Button
              type="link"
              key="home"
              icon={<HomeOutlined />}
              onClick={handleBackHome}
            >
              返回首页
            </Button>,
          ]}
        />

        <div style={{ maxWidth: 800, margin: '0 auto', marginTop: 48 }}>
          <Alert
            message="订单保留提醒"
            description="您的订单已为您保留30分钟，请在此时间内完成支付，超时后订单将自动取消。"
            type="warning"
            showIcon
            style={{ marginBottom: 24 }}
          />

          <Card
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CloseCircleOutlined style={{ color: '#f5222d' }} />
                支付失败信息
              </div>
            }
            size="small"
          >
            <Descriptions column={2} size="small">
              <Descriptions.Item label="订单编号">
                {errorInfo.orderNumber}
              </Descriptions.Item>
              <Descriptions.Item label="失败类型">
                {errorInfo.errorType}
              </Descriptions.Item>
              <Descriptions.Item label="错误代码">
                {errorInfo.errorCode}
              </Descriptions.Item>
              <Descriptions.Item label="失败时间">
                {errorInfo.failTime}
              </Descriptions.Item>
              <Descriptions.Item label="错误原因" span={2}>
                {errorInfo.errorMessage}
              </Descriptions.Item>
              <Descriptions.Item label="处理建议" span={2}>
                {errorInfo.suggestion}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="处理进度" style={{ marginTop: 24 }} size="small">
            <Timeline items={troubleSteps} />
          </Card>

          <Card title="常见问题解决方案" style={{ marginTop: 24 }} size="small">
            <div style={{ color: '#666', lineHeight: '24px' }}>
              <h4 style={{ color: '#262626', marginTop: 0 }}>
                支付超时怎么办？
              </h4>
              <p>• 检查网络连接是否稳定</p>
              <p>• 确认银行卡或支付宝余额是否充足</p>
              <p>• 重新选择支付方式进行支付</p>

              <h4 style={{ color: '#262626', marginTop: 16 }}>
                银行卡支付失败？
              </h4>
              <p>• 确认银行卡信息输入正确</p>
              <p>• 检查银行卡是否开通网银功能</p>
              <p>• 联系发卡银行确认卡片状态</p>

              <h4 style={{ color: '#262626', marginTop: 16 }}>
                仍然无法解决？
              </h4>
              <p>• 拨打客服热线：400-1234-5678</p>
              <p>• 在线客服咨询（工作时间：9:00-18:00）</p>
              <p>• 发送邮件至：support@example.com</p>
            </div>
          </Card>

          <div
            style={{
              textAlign: 'center',
              marginTop: 32,
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
            }}
          >
            <Button
              type="primary"
              size="large"
              icon={<ReloadOutlined />}
              onClick={handleRetryPayment}
            >
              立即重新支付
            </Button>
            <Button
              size="large"
              icon={<CustomerServiceOutlined />}
              onClick={handleContactService}
            >
              联系客服
            </Button>
            <Button size="large" onClick={handleViewOrder}>
              查看订单详情
            </Button>
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Fail;
