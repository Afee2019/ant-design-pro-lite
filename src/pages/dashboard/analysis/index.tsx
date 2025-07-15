import { Column, Line, Pie } from '@ant-design/charts';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DollarOutlined,
  EyeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Avatar,
  Card,
  Col,
  List,
  Progress,
  Row,
  Statistic,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';

const { Text } = Typography;

const Analysis: React.FC = () => {
  const [salesData, setSalesData] = useState<any[]>([]);
  const [visitData, setVisitData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 模拟数据加载
  useEffect(() => {
    const timer = setTimeout(() => {
      setSalesData([
        { month: '1月', value: 3200 },
        { month: '2月', value: 4100 },
        { month: '3月', value: 3700 },
        { month: '4月', value: 5600 },
        { month: '5月', value: 4800 },
        { month: '6月', value: 6200 },
        { month: '7月', value: 7100 },
        { month: '8月', value: 6500 },
        { month: '9月', value: 8200 },
        { month: '10月', value: 9100 },
        { month: '11月', value: 8800 },
        { month: '12月', value: 12100 },
      ]);

      setVisitData([
        { day: '周一', visits: 3200 },
        { day: '周二', visits: 4500 },
        { day: '周三', visits: 3800 },
        { day: '周四', visits: 6200 },
        { day: '周五', visits: 8500 },
        { day: '周六', visits: 7200 },
        { day: '周日', visits: 6800 },
      ]);

      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // 销售趋势图配置
  const salesConfig = {
    data: salesData,
    xField: 'month',
    yField: 'value',
    smooth: true,
    point: {
      size: 5,
      shape: 'diamond',
    },
    color: '#1890ff',
    lineStyle: {
      lineWidth: 3,
    },
    areaStyle: {
      fill: '#1890ff',
      fillOpacity: 0.3,
    },
    yAxis: {
      label: {
        formatter: (v: string) => `¥${(+v / 1000).toFixed(1)}k`,
      },
    },
  };

  // 访问量柱状图配置
  const visitConfig = {
    data: visitData,
    xField: 'day',
    yField: 'visits',
    color: '#52c41a',
    columnStyle: {
      radius: [4, 4, 0, 0],
    },
    labels: [
      {
        text: (datum: any) => {
          if (!datum || typeof datum !== 'object' || !datum.visits) return '';
          return `${(datum.visits / 1000).toFixed(1)}k`;
        },
        position: 'top',
        style: {
          fontSize: 11,
          fill: '#666',
        },
      },
    ],
  };

  // 销售渠道饼图数据
  const channelData = [
    { type: '线上商城', value: 45 },
    { type: '门店销售', value: 30 },
    { type: '分销渠道', value: 15 },
    { type: '其他', value: 10 },
  ];

  const pieConfig = {
    data: channelData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    color: ['#1890ff', '#52c41a', '#faad14', '#f5222d'],
    labels: [
      {
        text: (datum: any) => {
          if (!datum || typeof datum !== 'object') return '';
          return `${datum.type || ''} ${datum.value || 0}%`;
        },
        position: 'outside',
        style: {
          fontSize: 12,
          textAlign: 'center',
        },
      },
    ],
  };

  // 热销产品排行
  const topProducts = [
    { name: 'iPhone 15 Pro', sales: 12560, growth: 23.5 },
    { name: 'MacBook Pro M3', sales: 8420, growth: 18.2 },
    { name: 'iPad Air', sales: 6780, growth: -5.3 },
    { name: 'Apple Watch', sales: 5640, growth: 31.7 },
    { name: 'AirPods Pro', sales: 4320, growth: 12.8 },
  ];

  return (
    <PageContainer>
      {/* 核心指标卡片 */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card hoverable>
            <Statistic
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <DollarOutlined style={{ color: '#52c41a' }} />
                  总销售额
                </div>
              }
              value={1128936}
              precision={2}
              valueStyle={{ color: '#52c41a', fontSize: 24 }}
              prefix="¥"
              suffix={
                <div style={{ fontSize: 14, color: '#52c41a', marginLeft: 8 }}>
                  <ArrowUpOutlined /> 12.8%
                </div>
              }
              loading={loading}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>
              较上月增长 ¥156,742
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card hoverable>
            <Statistic
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <EyeOutlined style={{ color: '#1890ff' }} />
                  访问量
                </div>
              }
              value={88462}
              valueStyle={{ color: '#1890ff', fontSize: 24 }}
              suffix={
                <div style={{ fontSize: 14, color: '#52c41a', marginLeft: 8 }}>
                  <ArrowUpOutlined /> 8.3%
                </div>
              }
              loading={loading}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>
              日均访问 2,949 次
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card hoverable>
            <Statistic
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ShoppingCartOutlined style={{ color: '#722ed1' }} />
                  支付笔数
                </div>
              }
              value={6560}
              valueStyle={{ color: '#722ed1', fontSize: 24 }}
              suffix={
                <div style={{ fontSize: 14, color: '#f5222d', marginLeft: 8 }}>
                  <ArrowDownOutlined /> 2.1%
                </div>
              }
              loading={loading}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>
              转化率 7.4%
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card hoverable>
            <Statistic
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <UserOutlined style={{ color: '#faad14' }} />
                  运营活动效果
                </div>
              }
              value={78.5}
              precision={1}
              valueStyle={{ color: '#faad14', fontSize: 24 }}
              suffix={
                <div style={{ fontSize: 14, color: '#52c41a', marginLeft: 8 }}>
                  <ArrowUpOutlined /> 15.2%
                  <span style={{ marginLeft: 4 }}>%</span>
                </div>
              }
              loading={loading}
            />
            <Text type="secondary" style={{ fontSize: 12 }}>
              参与用户 45,672 人
            </Text>
          </Card>
        </Col>
      </Row>

      {/* 图表区域 */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={16}>
          <Card
            title="销售趋势"
            variant="outlined"
            extra={<Text type="secondary">单位：万元</Text>}
          >
            <Line {...salesConfig} height={300} loading={loading} />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="销售渠道占比" variant="outlined">
            <Pie {...pieConfig} height={300} loading={loading} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={12}>
          <Card title="每周访问量统计" variant="outlined">
            <Column {...visitConfig} height={300} loading={loading} />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="热销产品排行" variant="outlined">
            <List
              dataSource={topProducts}
              loading={loading}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        style={{
                          backgroundColor: index < 3 ? '#1890ff' : '#f0f0f0',
                          color: index < 3 ? '#fff' : '#666',
                          fontWeight: 'bold',
                        }}
                      >
                        {index + 1}
                      </Avatar>
                    }
                    title={item.name}
                    description={`销量：${item.sales} 件`}
                  />
                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        color: item.growth > 0 ? '#52c41a' : '#f5222d',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.growth > 0 ? '+' : ''}
                      {item.growth}%
                    </div>
                    <Progress
                      percent={Math.abs(item.growth)}
                      size="small"
                      showInfo={false}
                      strokeColor={item.growth > 0 ? '#52c41a' : '#f5222d'}
                      style={{ width: 100, marginTop: 4 }}
                    />
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Analysis;
