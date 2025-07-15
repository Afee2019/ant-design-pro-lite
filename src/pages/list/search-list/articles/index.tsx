import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button, Card, Col, Input, List, Row, Select, Tag } from 'antd';
import React, { useState } from 'react';

const { Option } = Select;

const SearchList: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  const mockData = [
    {
      id: 1,
      title: 'React Hooks 最佳实践指南',
      description:
        '深入探讨 React Hooks 的使用技巧和最佳实践，包含性能优化和常见陷阱',
      avatar: 'https://avatars.githubusercontent.com/u/12101536?v=4',
      owner: '张三',
      tags: ['React', 'Hooks', '前端开发'],
      readCount: 5200,
      createTime: '2024-01-15',
    },
    {
      id: 2,
      title: 'TypeScript 类型体操进阶',
      description: '从基础到高级的 TypeScript 类型操作，让你的代码更加健壮',
      avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
      owner: '李四',
      tags: ['TypeScript', '类型系统', '进阶'],
      readCount: 8700,
      createTime: '2024-01-10',
    },
    {
      id: 3,
      title: 'Vue 3 组合式 API 实战',
      description: '通过实际项目案例学习 Vue 3 Composition API 的强大功能',
      avatar: 'https://avatars.githubusercontent.com/u/15723521?v=4',
      owner: '王五',
      tags: ['Vue', 'Composition API', '实战'],
      readCount: 3400,
      createTime: '2024-01-08',
    },
    {
      id: 4,
      title: '前端性能优化实战指南',
      description: '从代码层面到工程化的全方位前端性能优化方案',
      avatar: 'https://avatars.githubusercontent.com/u/2405163?v=4',
      owner: '赵六',
      tags: ['性能优化', '工程化', '最佳实践'],
      readCount: 6800,
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
      <Card title="搜索列表（文章）" bordered={false}>
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col span={8}>
            <Input
              placeholder="请输入搜索关键词"
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
              placeholder="选择分类"
            >
              <Option value="all">全部分类</Option>
              <Option value="react">React</Option>
              <Option value="vue">Vue</Option>
              <Option value="typescript">TypeScript</Option>
              <Option value="性能优化">性能优化</Option>
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
                <span key="read">📖 阅读量: {item.readCount}</span>,
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
                        <Tag key={tag} color="blue">
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

export default SearchList;
