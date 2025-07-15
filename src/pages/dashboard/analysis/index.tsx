import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Statistic, theme } from 'antd';
import React from 'react';

const Analysis: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <PageContainer>
      <div style={{ background: token.colorBgLayout, padding: 24 }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="总销售额"
                value={112893}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix="¥"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="访问量"
                value={8846}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="支付笔数"
                value={6560}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="运营活动效果"
                value={78}
                precision={0}
                valueStyle={{ color: '#722ed1' }}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={12}>
            <Card title="销售趋势" bordered={false}>
              <div
                style={{
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p style={{ color: token.colorTextSecondary }}>
                  图表组件待实现
                </p>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="访问量统计" bordered={false}>
              <div
                style={{
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p style={{ color: token.colorTextSecondary }}>
                  图表组件待实现
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default Analysis;
