import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button, Card, Col, Input, List, Row, Select, Tag } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

const SearchProjects: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  const mockData = [
    {
      id: 1,
      title: 'Ant Design Pro',
      description: '基于 Ant Design 和 umi 的企业级前端应用框架',
      avatar: 'https://avatars.githubusercontent.com/u/12101536?v=4',
      owner: 'antd',
      tags: ['React', 'TypeScript', 'Ant Design'],
      stars: 36000,
      createTime: '2024-01-15',
    },
    {
      id: 2,
      title: 'Vue Element Admin',
      description: '基于 Vue.js 和 Element UI 的后台管理系统',
      avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
      owner: 'panjiachen',
      tags: ['Vue', 'Element UI', 'JavaScript'],
      stars: 87000,
      createTime: '2024-01-10',
    },
    {
      id: 3,
      title: 'React Admin',
      description: 'A frontend Framework for building B2B applications',
      avatar: 'https://avatars.githubusercontent.com/u/15723521?v=4',
      owner: 'marmelab',
      tags: ['React', 'Material-UI', 'Admin'],
      stars: 24000,
      createTime: '2024-01-08',
    },
    {
      id: 4,
      title: 'Ng Alain',
      description:
        'ng-alain is a production-ready solution for admin interfaces',
      avatar: 'https://avatars.githubusercontent.com/u/2405163?v=4',
      owner: 'ng-alain',
      tags: ['Angular', 'Ng-Zorro', 'TypeScript'],
      stars: 4600,
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
      <Card title="搜索列表（项目）" bordered={false}>
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col span={8}>
            <Input
              placeholder="请输入项目关键词"
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
              placeholder="选择技术栈"
            >
              <Option value="all">全部技术栈</Option>
              <Option value="react">React</Option>
              <Option value="vue">Vue</Option>
              <Option value="angular">Angular</Option>
              <Option value="typescript">TypeScript</Option>
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
                <span key="star">⭐ Star: {item.stars}</span>,
                <span key="time">创建时间: {item.createTime}</span>,
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
                        <Tag key={tag} color="green">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                    <div style={{ marginTop: 8, color: '#666' }}>
                      by {item.owner}
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

export default SearchProjects;
