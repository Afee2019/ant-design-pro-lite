import {
  ProjectOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Avatar,
  Badge,
  Card,
  Col,
  Descriptions,
  Progress,
  Row,
  Steps,
  Table,
  Tabs,
  Tag,
  Timeline,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

const AdvancedProfile: React.FC = () => {
  const userInfo = {
    name: '李四',
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
    email: 'lisi@example.com',
    phone: '139-8765-4321',
    position: '高级前端开发工程师',
    department: '技术部',
    team: '前端团队',
    location: '上海市浦东新区',
    joinDate: '2021-06-01',
    employeeId: 'EMP-002',
    level: 'P7',
    status: 'active',
    manager: '王五',
    workYears: '5年',
    education: '本科 - 计算机科学与技术',
    university: '清华大学',
    graduationYear: '2019',
    skills: [
      'React',
      'Vue',
      'TypeScript',
      'Node.js',
      'Python',
      'Docker',
      'K8s',
    ],
    certifications: ['AWS认证', 'PMP证书', 'CKA认证'],
  };

  const performanceData = [
    {
      quarter: '2024 Q1',
      score: 95,
      rank: '优秀',
      kpi: '超额完成',
      bonus: '15%',
    },
    { quarter: '2023 Q4', score: 92, rank: '优秀', kpi: '完成', bonus: '12%' },
    { quarter: '2023 Q3', score: 88, rank: '良好', kpi: '完成', bonus: '8%' },
    {
      quarter: '2023 Q2',
      score: 85,
      rank: '良好',
      kpi: '基本完成',
      bonus: '5%',
    },
  ];

  const workExperience = [
    {
      company: '当前公司',
      position: '高级前端开发工程师',
      startDate: '2021-06',
      endDate: '至今',
      description:
        '负责公司核心产品的前端架构设计和开发工作，带领团队完成多个重大项目。',
      achievements: ['搭建前端架构', '性能优化提升50%', '团队管理'],
    },
    {
      company: '阿里巴巴',
      position: '前端开发工程师',
      startDate: '2019-07',
      endDate: '2021-05',
      description: '参与淘宝前端开发，负责用户界面优化和新功能开发。',
      achievements: ['用户体验优化', '新功能开发', '代码重构'],
    },
    {
      company: '腾讯',
      position: '前端开发实习生',
      startDate: '2019-01',
      endDate: '2019-06',
      description: '在微信团队实习，参与小程序相关功能开发。',
      achievements: ['小程序开发', '组件库建设', '性能监控'],
    },
  ];

  const projectTimeline = [
    {
      time: '2024-01',
      title: '企业级管理系统',
      description: '项目负责人，带领5人团队完成整个系统的前端开发',
      status: '进行中',
    },
    {
      time: '2023-09',
      title: '电商平台重构',
      description: '核心开发者，负责购物车和订单模块的重构工作',
      status: '已完成',
    },
    {
      time: '2023-06',
      title: '移动端优化项目',
      description: '性能优化专家，将移动端首屏加载时间优化了40%',
      status: '已完成',
    },
    {
      time: '2023-03',
      title: '组件库建设',
      description: '主导建设公司级React组件库，覆盖80%业务场景',
      status: '已完成',
    },
  ];

  const performanceColumns: ColumnsType<any> = [
    {
      title: '考核周期',
      dataIndex: 'quarter',
      key: 'quarter',
    },
    {
      title: '绩效得分',
      dataIndex: 'score',
      key: 'score',
      render: (score) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Progress
            type="circle"
            size={40}
            percent={score}
            format={() => score}
          />
        </div>
      ),
    },
    {
      title: '绩效等级',
      dataIndex: 'rank',
      key: 'rank',
      render: (rank) => {
        const color =
          rank === '优秀'
            ? 'success'
            : rank === '良好'
              ? 'processing'
              : 'default';
        return <Badge status={color} text={rank} />;
      },
    },
    {
      title: 'KPI完成度',
      dataIndex: 'kpi',
      key: 'kpi',
    },
    {
      title: '奖金比例',
      dataIndex: 'bonus',
      key: 'bonus',
      render: (bonus) => <Tag color="green">{bonus}</Tag>,
    },
  ];

  const tabItems = [
    {
      key: 'experience',
      label: '工作经历',
      icon: <UserOutlined />,
      children: (
        <Steps
          direction="vertical"
          current={0}
          items={workExperience.map((exp, index) => ({
            title: `${exp.position} @ ${exp.company}`,
            description: (
              <div>
                <p style={{ color: '#666', marginBottom: 8 }}>
                  {exp.startDate} - {exp.endDate}
                </p>
                <p style={{ marginBottom: 8 }}>{exp.description}</p>
                <div>
                  <strong>主要成就：</strong>
                  {exp.achievements.map((achievement) => (
                    <Tag
                      key={achievement}
                      color="blue"
                      style={{ marginTop: 4 }}
                    >
                      {achievement}
                    </Tag>
                  ))}
                </div>
              </div>
            ),
            status: index === 0 ? 'process' : 'finish',
          }))}
        />
      ),
    },
    {
      key: 'projects',
      label: '项目经历',
      icon: <ProjectOutlined />,
      children: (
        <Timeline
          items={projectTimeline.map((project) => ({
            color: project.status === '进行中' ? 'blue' : 'green',
            children: (
              <div>
                <h4>{project.title}</h4>
                <p style={{ color: '#666', marginBottom: 8 }}>{project.time}</p>
                <p>{project.description}</p>
                <Tag
                  color={project.status === '进行中' ? 'processing' : 'success'}
                >
                  {project.status}
                </Tag>
              </div>
            ),
          }))}
        />
      ),
    },
    {
      key: 'performance',
      label: '绩效考核',
      icon: <TrophyOutlined />,
      children: (
        <Table
          columns={performanceColumns}
          dataSource={performanceData}
          rowKey="quarter"
          pagination={false}
        />
      ),
    },
  ];

  return (
    <PageContainer>
      <Row gutter={24}>
        <Col span={8}>
          <Card title="个人档案" bordered={false}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <Avatar size={100} src={userInfo.avatar} />
              <h2 style={{ marginTop: 16, marginBottom: 4 }}>
                {userInfo.name}
              </h2>
              <p style={{ color: '#666', marginBottom: 8 }}>
                {userInfo.position}
              </p>
              <Badge status="success" text="在职" />
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
              <Descriptions.Item label="所属团队">
                {userInfo.team}
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

          <Card title="教育背景" bordered={false} style={{ marginTop: 24 }}>
            <Descriptions column={1} size="small">
              <Descriptions.Item label="学历">
                {userInfo.education}
              </Descriptions.Item>
              <Descriptions.Item label="毕业院校">
                {userInfo.university}
              </Descriptions.Item>
              <Descriptions.Item label="毕业年份">
                {userInfo.graduationYear}
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
          <Card title="专业技能" bordered={false}>
            <div style={{ marginBottom: 24 }}>
              <h4 style={{ marginBottom: 12 }}>技术技能</h4>
              <div>
                {userInfo.skills.map((skill) => (
                  <Tag
                    key={skill}
                    color="blue"
                    style={{ marginBottom: 8, marginRight: 8 }}
                  >
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: 12 }}>专业认证</h4>
              <div>
                {userInfo.certifications.map((cert) => (
                  <Tag
                    key={cert}
                    color="gold"
                    style={{ marginBottom: 8, marginRight: 8 }}
                  >
                    {cert}
                  </Tag>
                ))}
              </div>
            </div>
          </Card>

          <Card title="详细信息" bordered={false} style={{ marginTop: 24 }}>
            <Tabs items={tabItems} />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default AdvancedProfile;
