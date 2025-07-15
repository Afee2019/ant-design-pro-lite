import { CheckCircleOutlined, RightOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Descriptions, Result, Steps, Typography } from 'antd';
import React from 'react';

const { Paragraph, Text } = Typography;

const Success: React.FC = () => {
  const orderInfo = {
    orderNumber: 'ORDER-2024011501',
    amount: '¥2,568.00',
    paymentMethod: '支付宝',
    createTime: '2024-01-15 14:30:25',
    estimatedDelivery: '2024-01-18',
    contact: '张三 (138-1234-5678)',
    address: '北京市朝阳区建国路88号SOHO现代城',
  };

  const nextSteps = [
    {
      title: '订单确认',
      status: 'finish',
      description: '您的订单已确认',
    },
    {
      title: '备货中',
      status: 'process',
      description: '商家正在为您备货',
    },
    {
      title: '已发货',
      status: 'wait',
      description: '商品将尽快发出',
    },
    {
      title: '已送达',
      status: 'wait',
      description: '快递员将联系您',
    },
  ];

  const handleViewOrder = () => {
    console.log('查看订单详情');
  };

  const handleContinueShopping = () => {
    console.log('继续购物');
  };

  const handleBackHome = () => {
    console.log('返回首页');
  };

  return (
    <PageContainer>
      <Card bordered={false}>
        <Result
          status="success"
          title="支付成功！"
          subTitle={
            <div>
              <Paragraph>
                订单号：<Text strong>{orderInfo.orderNumber}</Text>
              </Paragraph>
              <Paragraph>
                支付金额：
                <Text strong style={{ color: '#52c41a', fontSize: 16 }}>
                  {orderInfo.amount}
                </Text>
              </Paragraph>
              <Paragraph type="secondary">
                您的订单已经提交成功，我们将尽快为您处理。预计{' '}
                {orderInfo.estimatedDelivery} 送达。
              </Paragraph>
            </div>
          }
          extra={[
            <Button type="primary" key="order" onClick={handleViewOrder}>
              查看订单
            </Button>,
            <Button key="shopping" onClick={handleContinueShopping}>
              继续购物
            </Button>,
            <Button type="link" key="home" onClick={handleBackHome}>
              返回首页
            </Button>,
          ]}
        />

        <div style={{ maxWidth: 800, margin: '0 auto', marginTop: 48 }}>
          <Card
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircleOutlined style={{ color: '#52c41a' }} />
                订单详情
              </div>
            }
            size="small"
          >
            <Descriptions column={2} size="small">
              <Descriptions.Item label="订单编号">
                {orderInfo.orderNumber}
              </Descriptions.Item>
              <Descriptions.Item label="支付方式">
                {orderInfo.paymentMethod}
              </Descriptions.Item>
              <Descriptions.Item label="下单时间">
                {orderInfo.createTime}
              </Descriptions.Item>
              <Descriptions.Item label="预计送达">
                {orderInfo.estimatedDelivery}
              </Descriptions.Item>
              <Descriptions.Item label="收货人">
                {orderInfo.contact}
              </Descriptions.Item>
              <Descriptions.Item label="收货地址" span={2}>
                {orderInfo.address}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="订单进度" style={{ marginTop: 24 }} size="small">
            <Steps
              current={1}
              size="small"
              items={nextSteps.map((step) => ({
                title: step.title,
                description: step.description,
                status: step.status as any,
              }))}
            />
          </Card>

          <Card title="温馨提示" style={{ marginTop: 24 }} size="small">
            <div style={{ color: '#666', lineHeight: '24px' }}>
              <p>• 订单支付成功后，商家会在24小时内确认订单并开始备货</p>
              <p>• 您可以在"我的订单"中实时跟踪订单状态</p>
              <p>• 如有问题，请联系客服：400-1234-5678</p>
              <p>• 订单配送期间，请保持手机畅通，以便快递员联系您</p>
            </div>
          </Card>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Button
              type="primary"
              size="large"
              icon={<RightOutlined />}
              onClick={handleViewOrder}
            >
              立即查看订单详情
            </Button>
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Success;
