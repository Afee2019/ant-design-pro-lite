import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Card, Col, List, Row, Tag, theme } from 'antd';
import React from 'react';

const Workplace: React.FC = () => {
  const { token } = theme.useToken();

  const projects = [
    {
      id: 1,
      name: 'Ant Design Pro',
      desc: '那是一种内在的东西，他们到达不了，也无法触及的',
      status: '进行中',
    },
    {
      id: 2,
      name: 'Angular',
      desc: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      status: '已完成',
    },
    {
      id: 3,
      name: 'React',
      desc: '生命就像一盒巧克力，结果往往出人意料',
      status: '进行中',
    },
    {
      id: 4,
      name: 'Vue',
      desc: '那时候我只会想自己想要什么，从不想自己拥有什么',
      status: '待开始',
    },
  ];

  const activities = [
    {
      id: 1,
      user: '张三',
      action: '在 Ant Design Pro 中新建了项目',
      time: '2024-01-15 14:30',
    },
    { id: 2, user: '李四', action: '更新了项目文档', time: '2024-01-15 13:20' },
    { id: 3, user: '王五', action: '提交了新的代码', time: '2024-01-15 12:10' },
    {
      id: 4,
      user: '赵六',
      action: '修复了一个重要bug',
      time: '2024-01-15 11:45',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '进行中':
        return 'processing';
      case '已完成':
        return 'success';
      case '待开始':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <PageContainer>
      <div style={{ background: token.colorBgLayout, padding: 24 }}>
        <Row gutter={16}>
          <Col span={16}>
            <Card title="我的项目" bordered={false}>
              <List
                dataSource={projects}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar style={{ backgroundColor: '#1890ff' }}>
                          {item.name[0]}
                        </Avatar>
                      }
                      title={item.name}
                      description={item.desc}
                    />
                    <Tag color={getStatusColor(item.status)}>{item.status}</Tag>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="快速导航"
              bordered={false}
              style={{ marginBottom: 16 }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 16,
                }}
              >
                <Card size="small" hoverable>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>📊</div>
                    <div>数据分析</div>
                  </div>
                </Card>
                <Card size="small" hoverable>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>📝</div>
                    <div>新建表单</div>
                  </div>
                </Card>
                <Card size="small" hoverable>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>📋</div>
                    <div>任务列表</div>
                  </div>
                </Card>
                <Card size="small" hoverable>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>⚙️</div>
                    <div>系统设置</div>
                  </div>
                </Card>
              </div>
            </Card>

            <Card title="动态" bordered={false}>
              <List
                dataSource={activities}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar style={{ backgroundColor: '#87d068' }}>
                          {item.user[0]}
                        </Avatar>
                      }
                      title={
                        <span>
                          {item.user} {item.action}
                        </span>
                      }
                      description={item.time}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};

export default Workplace;
