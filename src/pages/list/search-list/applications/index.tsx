import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button, Card, Col, Input, List, Row, Select, Tag } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

const SearchApplications: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  const mockData = [
    {
      id: 1,
      title: '企业级CRM系统',
      description:
        '功能强大的客户关系管理系统，支持销售管道、客户跟踪、报表分析等功能',
      avatar: 'https://avatars.githubusercontent.com/u/12101536?v=4',
      developer: 'TechCorp',
      tags: ['CRM', '企业应用', 'B2B'],
      downloads: 15600,
      createTime: '2024-01-15',
    },
    {
      id: 2,
      title: '智能财务管理平台',
      description: '集成记账、预算、投资分析的一站式财务管理解决方案',
      avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
      developer: 'FinanceInc',
      tags: ['财务', '记账', '投资'],
      downloads: 28900,
      createTime: '2024-01-10',
    },
    {
      id: 3,
      title: '项目协作工具',
      description: '团队协作必备工具，支持任务管理、文档协作、进度跟踪等功能',
      avatar: 'https://avatars.githubusercontent.com/u/15723521?v=4',
      developer: 'TeamWork',
      tags: ['协作', '项目管理', '团队'],
      downloads: 34500,
      createTime: '2024-01-08',
    },
    {
      id: 4,
      title: '在线教育平台',
      description: '支持直播授课、作业管理、学习进度跟踪的综合教育平台',
      avatar: 'https://avatars.githubusercontent.com/u/2405163?v=4',
      developer: 'EduTech',
      tags: ['教育', '在线学习', 'MOOC'],
      downloads: 12300,
      createTime: '2024-01-05',
    },
  ];

  const [filteredData, setFilteredData] = useState(mockData);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      let result = mockData;

      if (searchText) {
        result = result.filter(
          (item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.description.toLowerCase().includes(searchText.toLowerCase()),
        );
      }

      if (category !== 'all') {
        result = result.filter((item) =>
          item.tags.some((tag) =>
            tag.toLowerCase().includes(category.toLowerCase()),
          ),
        );
      }

      setFilteredData(result);
      setLoading(false);
    }, 500);
  };

  return (
    <PageContainer>
      <Card title="搜索列表（应用）" bordered={false}>
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col span={8}>
            <Input
              placeholder="请输入应用名称或功能"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onPressEnter={handleSearch}
            />
          </Col>
          <Col span={6}>
            <Select
              value={category}
              onChange={setCategory}
              style={{ width: '100%' }}
              placeholder="选择应用类型"
            >
              <Option value="all">全部类型</Option>
              <Option value="crm">CRM</Option>
              <Option value="财务">财务</Option>
              <Option value="协作">协作</Option>
              <Option value="教育">教育</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={handleSearch}
              loading={loading}
            >
              搜索
            </Button>
          </Col>
        </Row>

        <List
          loading={loading}
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={filteredData}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <span key="downloads">⬇️ 下载量: {item.downloads}</span>,
                <span key="time">发布时间: {item.createTime}</span>,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} icon={<UserOutlined />} />}
                title={<a href="#">{item.title}</a>}
                description={
                  <div>
                    <div style={{ marginBottom: 8 }}>{item.description}</div>
                    <div>
                      {item.tags.map((tag) => (
                        <Tag key={tag} color="purple">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                    <div style={{ marginTop: 8, color: '#666' }}>
                      开发商: {item.developer}
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </PageContainer>
  );
};

export default SearchApplications;
