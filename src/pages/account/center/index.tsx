import {
  EditOutlined,
  MessageOutlined,
  ProjectOutlined,
  SettingOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  List,
  Progress,
  Row,
  Statistic,
  Tabs,
  Tag,
  Timeline,
} from 'antd';
import React from 'react';

const AccountCenter: React.FC = () => {
  const userInfo = {
    name: '张三',
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
    signature: '海纳百川，有容乃大',
    title: '前端开发工程师',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: ['很有想法的', '专注设计', '海纳百川'],
    location: '浙江省杭州市',
    website: 'https://github.com/username',
  };

  const statistics = [
    { title: '项目数', value: 56, suffix: '个' },
    { title: '团队内排名', value: 8, suffix: '/24' },
    { title: '项目访问', value: 2223, suffix: '次' },
  ];

  const applications = [
    {
      id: 1,
      title: 'Ant Design Pro',
      description: '基于 Ant Design 的企业级中后台前端/设计解决方案',
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      updatedAt: '2小时前',
      members: [
        'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
      ],
    },
    {
      id: 2,
      title: 'Angular',
      description: 'TypeScript-based open-source web application framework',
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      updatedAt: '1天前',
      members: [
        'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
      ],
    },
  ];

  const activities = [
    {
      id: 1,
      content: '在 Ant Design Pro 中新建了项目',
      timestamp: '2024-01-15 14:30',
      type: 'project',
    },
    {
      id: 2,
      content: '提交了代码到 React 项目',
      timestamp: '2024-01-15 10:20',
      type: 'commit',
    },
    {
      id: 3,
      content: '参与了技术分享会议',
      timestamp: '2024-01-14 16:45',
      type: 'meeting',
    },
    {
      id: 4,
      content: '完成了月度绩效评估',
      timestamp: '2024-01-12 09:15',
      type: 'evaluation',
    },
  ];

  const projects = [
    {
      title: '电商平台重构',
      description: '基于React的电商平台前端重构项目',
      status: '进行中',
      progress: 75,
      team: ['张三', '李四', '王五'],
      dueDate: '2024-03-30',
    },
    {
      title: '移动端APP',
      description: 'React Native移动应用开发',
      status: '已完成',
      progress: 100,
      team: ['张三', '赵六'],
      dueDate: '2024-01-15',
    },
  ];

  const tabItems = [
    {
      key: 'projects',
      label: (
        <span>
          <ProjectOutlined />
          应用 (8)
        </span>
      ),
      children: (
        <List
          rowKey="id"
          grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
          dataSource={applications}
          renderItem={(item) => (
            <List.Item>
              <Card hoverable>
                <Card.Meta
                  avatar={<Avatar size={40} src={item.icon} />}
                  title={item.title}
                  description={
                    <div>
                      <div
                        style={{
                          marginBottom: 8,
                          height: 44,
                          overflow: 'hidden',
                        }}
                      >
                        {item.description}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Avatar.Group maxCount={3} size="small">
                          {item.members.map((member) => (
                            <Avatar key={member} src={member} />
                          ))}
                        </Avatar.Group>
                        <span style={{ color: '#999', fontSize: 12 }}>
                          {item.updatedAt}
                        </span>
                      </div>
                    </div>
                  }
                />
              </Card>
            </List.Item>
          )}
        />
      ),
    },
    {
      key: 'activities',
      label: (
        <span>
          <MessageOutlined />
          动态 (12)
        </span>
      ),
      children: (
        <Timeline
          items={activities.map((activity) => ({
            children: (
              <div>
                <div>{activity.content}</div>
                <div style={{ color: '#999', fontSize: 12, marginTop: 4 }}>
                  {activity.timestamp}
                </div>
              </div>
            ),
          }))}
        />
      ),
    },
    {
      key: 'projects-detail',
      label: (
        <span>
          <TrophyOutlined />
          项目 (5)
        </span>
      ),
      children: (
        <List
          dataSource={projects}
          renderItem={(item) => (
            <List.Item>
              <Card size="small" style={{ width: '100%' }}>
                <Row>
                  <Col span={16}>
                    <h4 style={{ marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ color: '#666', marginBottom: 8 }}>
                      {item.description}
                    </p>
                    <p style={{ color: '#666', fontSize: 12 }}>
                      团队：{item.team.join('、')} | 截止日期：{item.dueDate}
                    </p>
                  </Col>
                  <Col span={8} style={{ textAlign: 'right' }}>
                    <Tag
                      color={
                        item.status === '进行中' ? 'processing' : 'success'
                      }
                    >
                      {item.status}
                    </Tag>
                    <div style={{ marginTop: 8 }}>
                      <Progress percent={item.progress} size="small" />
                    </div>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      ),
    },
  ];

  return (
    <PageContainer>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card bordered={false} style={{ marginBottom: 24 }}>
            <div style={{ textAlign: 'center' }}>
              <Avatar size={104} src={userInfo.avatar} />
              <div style={{ marginTop: 20 }}>
                <h3 style={{ marginBottom: 4 }}>{userInfo.name}</h3>
                <p style={{ color: '#999' }}>{userInfo.signature}</p>
              </div>
            </div>

            <Divider dashed />

            <div style={{ marginBottom: 16 }}>
              <div style={{ marginBottom: 8 }}>
                <strong>{userInfo.title}</strong>
              </div>
              <div style={{ color: '#666', fontSize: 13, marginBottom: 16 }}>
                {userInfo.group}
              </div>
              <div style={{ color: '#666', fontSize: 13, marginBottom: 16 }}>
                📍 {userInfo.location}
              </div>
              <div style={{ color: '#666', fontSize: 13 }}>
                🌐{' '}
                <a
                  href={userInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  个人网站
                </a>
              </div>
            </div>

            <Divider dashed />

            <div>
              <div style={{ marginBottom: 8 }}>
                <strong>标签</strong>
              </div>
              <div>
                {userInfo.tags.map((tag) => (
                  <Tag key={tag} style={{ marginBottom: 8 }}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>

            <Divider dashed />

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button type="primary" icon={<EditOutlined />}>
                编辑资料
              </Button>
              <Button icon={<SettingOutlined />}>设置</Button>
            </div>
          </Card>

          <Card title="能力" size="small" bordered={false}>
            <Row gutter={16}>
              {statistics.map((stat) => (
                <Col span={8} key={stat.title}>
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    suffix={stat.suffix}
                    valueStyle={{ fontSize: 20 }}
                  />
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        <Col lg={17} md={24}>
          <Card
            bordered={false}
            tabList={[
              { key: 'projects', tab: '应用' },
              { key: 'activities', tab: '动态' },
              { key: 'projects-detail', tab: '项目' },
            ]}
          >
            <Tabs items={tabItems} />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default AccountCenter;
