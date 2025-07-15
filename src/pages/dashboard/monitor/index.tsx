import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Progress, Row, Statistic, Table, theme } from 'antd';
import React from 'react';

const Monitor: React.FC = () => {
  const { token } = theme.useToken();

  const systemData = [
    { key: '1', name: 'CPU使用率', value: 67, status: 'normal' },
    { key: '2', name: '内存使用率', value: 84, status: 'warning' },
    { key: '3', name: '磁盘使用率', value: 45, status: 'normal' },
    { key: '4', name: '网络流量', value: 23, status: 'normal' },
  ];

  const columns = [
    {
      title: '监控项',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '使用率',
      dataIndex: 'value',
      key: 'value',
      render: (value: number, record: any) => (
        <Progress
          percent={value}
          status={record.status === 'warning' ? 'exception' : 'normal'}
        />
      ),
    },
  ];

  return (
    <PageContainer>
      <div style={{ background: token.colorBgLayout, padding: 24 }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="在线用户"
                value={1234}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="系统负载"
                value={2.5}
                precision={1}
                valueStyle={{ color: '#faad14' }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="错误率"
                value={0.52}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="响应时间"
                value={235}
                valueStyle={{ color: '#1890ff' }}
                suffix="ms"
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: 16 }}>
          <Col span={12}>
            <Card title="系统监控" bordered={false}>
              <Table
                dataSource={systemData}
                columns={columns}
                pagination={false}
                size="small"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="实时监控图表" bordered={false}>
              <div
                style={{
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p style={{ color: token.colorTextSecondary }}>
                  实时监控图表待实现
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default Monitor;
