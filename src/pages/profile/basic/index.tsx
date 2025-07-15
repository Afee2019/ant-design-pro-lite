import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Badge, Card, Col, Descriptions, Row, Tag } from 'antd';
import React from 'react';

const BasicProfile: React.FC = () => {
  const userInfo = {
    name: '张三',
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
    email: 'zhangsan@example.com',
    phone: '138-1234-5678',
    position: '前端开发工程师',
    department: '技术部',
    location: '北京市朝阳区',
    joinDate: '2023-03-15',
    employeeId: 'EMP-001',
    level: 'P6',
    status: 'active',
    manager: '李四',
    workYears: '3年',
    skills: ['React', 'TypeScript', 'Node.js', 'Ant Design'],
    languages: ['中文', '英语', '日语'],
  };

  const projectInfo = [
    {
      name: 'Ant Design Pro',
      status: '进行中',
      role: '前端负责人',
      progress: 85,
      startDate: '2024-01-01',
      endDate: '2024-06-30',
    },
    {
      name: '电商平台重构',
      status: '已完成',
      role: '核心开发',
      progress: 100,
      startDate: '2023-09-01',
      endDate: '2023-12-31',
    },
    {
      name: '移动端APP',
      status: '待开始',
      role: '技术顾问',
      progress: 0,
      startDate: '2024-07-01',
      endDate: '2024-12-31',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge status="success" text="在职" />;
      case 'inactive':
        return <Badge status="default" text="离职" />;
      case 'pending':
        return <Badge status="processing" text="待入职" />;
      default:
        return <Badge status="default" text={status} />;
    }
  };

  const getProjectStatusColor = (status: string) => {
    switch (status) {
      case '进行中':
        return 'processing';
      case '已完成':
        return 'success';
      case '待开始':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <PageContainer>
      <Row gutter={24}>
        <Col span={8}>
          <Card title="个人信息" bordered={false}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <Avatar size={80} src={userInfo.avatar} />
              <h3 style={{ marginTop: 16, marginBottom: 4 }}>
                {userInfo.name}
              </h3>
              <p style={{ color: '#666' }}>{userInfo.position}</p>
              {getStatusBadge(userInfo.status)}
            </div>

            <Descriptions column={1} size="small">
              <Descriptions.Item label="员工编号">
                {userInfo.employeeId}
              </Descriptions.Item>
              <Descriptions.Item label="职级">
                {userInfo.level}
              </Descriptions.Item>
              <Descriptions.Item label="所属部门">
                {userInfo.department}
              </Descriptions.Item>
              <Descriptions.Item label="直属领导">
                {userInfo.manager}
              </Descriptions.Item>
              <Descriptions.Item label="工作年限">
                {userInfo.workYears}
              </Descriptions.Item>
              <Descriptions.Item label="入职时间">
                {userInfo.joinDate}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="联系方式" bordered={false} style={{ marginTop: 24 }}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="邮箱">
                {userInfo.email}
              </Descriptions.Item>
              <Descriptions.Item label="手机">
                {userInfo.phone}
              </Descriptions.Item>
              <Descriptions.Item label="办公地点">
                {userInfo.location}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        <Col span={16}>
          <Card title="技能标签" bordered={false}>
            <div style={{ marginBottom: 16 }}>
              <h4>技术技能</h4>
              <div>
                {userInfo.skills.map((skill) => (
                  <Tag key={skill} color="blue" style={{ marginBottom: 8 }}>
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>

            <div>
              <h4>语言能力</h4>
              <div>
                {userInfo.languages.map((language) => (
                  <Tag key={language} color="green" style={{ marginBottom: 8 }}>
                    {language}
                  </Tag>
                ))}
              </div>
            </div>
          </Card>

          <Card title="参与项目" bordered={false} style={{ marginTop: 24 }}>
            {projectInfo.map((project) => (
              <Card
                key={project.name}
                size="small"
                style={{ marginBottom: 16 }}
              >
                <Row>
                  <Col span={16}>
                    <h4 style={{ marginBottom: 8 }}>{project.name}</h4>
                    <p style={{ color: '#666', marginBottom: 8 }}>
                      担任角色：{project.role}
                    </p>
                    <p style={{ color: '#666', fontSize: 12 }}>
                      {project.startDate} ~ {project.endDate}
                    </p>
                  </Col>
                  <Col span={8} style={{ textAlign: 'right' }}>
                    <Tag color={getProjectStatusColor(project.status)}>
                      {project.status}
                    </Tag>
                    <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>
                      进度: {project.progress}%
                    </div>
                  </Col>
                </Row>
              </Card>
            ))}
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default BasicProfile;
