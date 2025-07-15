import {
  LikeOutlined,
  MessageOutlined,
  MoreOutlined,
  SearchOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import type { MenuProps } from 'antd';
import {
  Avatar,
  Button,
  Card,
  Dropdown,
  Input,
  List,
  Progress,
  Radio,
  Space,
} from 'antd';
import React, { useState } from 'react';

const StandardList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchText, setSearchText] = useState('');

  const mockData = [
    {
      id: 1,
      title: 'Ant Design Pro',
      avatar: 'https://avatars.githubusercontent.com/u/12101536?v=4',
      description:
        '基于 Ant Design 和 umi 的企业级前端应用框架，为中后台前端/设计语言方案提供专业的一体化解决方案。',
      owner: 'Ant Design Team',
      href: 'https://pro.ant.design',
      updatedAt: '2024-01-15',
      memberLink: 'https://github.com/ant-design/ant-design-pro',
      members: [
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: 'User1',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: 'User2',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: 'User3',
        },
      ],
      star: 156,
      like: 208,
      message: 89,
      percent: 87,
      status: 'active',
    },
    {
      id: 2,
      title: 'Angular',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      description:
        'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。',
      owner: 'Google',
      href: 'https://angular.io',
      updatedAt: '2024-01-12',
      memberLink: 'https://github.com/angular/angular',
      members: [
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: 'User1',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: 'User2',
        },
      ],
      star: 92,
      like: 167,
      message: 45,
      percent: 73,
      status: 'pending',
    },
    {
      id: 3,
      title: 'React',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      description:
        'React 是一个用于构建用户界面的 JavaScript 库，它让交互式 UI 的创建变得轻而易举。',
      owner: 'Facebook',
      href: 'https://reactjs.org',
      updatedAt: '2024-01-10',
      memberLink: 'https://github.com/facebook/react',
      members: [
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: 'User1',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: 'User2',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: 'User3',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
          name: 'User4',
        },
      ],
      star: 234,
      like: 312,
      message: 156,
      percent: 95,
      status: 'completed',
    },
    {
      id: 4,
      title: 'Vue',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      description:
        'Vue.js 是一套用于构建用户界面的渐进式框架，被设计为可以自底向上逐层应用。',
      owner: 'Evan You',
      href: 'https://vuejs.org',
      updatedAt: '2024-01-08',
      memberLink: 'https://github.com/vuejs/vue',
      members: [
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: 'User1',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: 'User2',
        },
        {
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: 'User3',
        },
      ],
      star: 189,
      like: 245,
      message: 98,
      percent: 78,
      status: 'active',
    },
  ];

  const [dataSource, setDataSource] = useState(mockData);

  const items: MenuProps['items'] = [
    {
      key: 'edit',
      label: '编辑',
    },
    {
      key: 'delete',
      label: '删除',
      danger: true,
    },
  ];

  const handleMenuClick = (key: string, item: any) => {
    console.log('Action:', key, 'Item:', item);
  };

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

      if (filter !== 'all') {
        result = result.filter((item) => item.status === filter);
      }

      setDataSource(result);
      setLoading(false);
    }, 500);
  };

  const extraContent = (
    <div style={{ display: 'flex', gap: 16 }}>
      <Input.Search
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="搜索项目"
        onSearch={handleSearch}
        style={{ width: 272 }}
        enterButton={<SearchOutlined />}
      />
      <Radio.Group value={filter} onChange={(e) => setFilter(e.target.value)}>
        <Radio.Button value="all">全部</Radio.Button>
        <Radio.Button value="active">进行中</Radio.Button>
        <Radio.Button value="pending">待开始</Radio.Button>
        <Radio.Button value="completed">已完成</Radio.Button>
      </Radio.Group>
    </div>
  );

  return (
    <PageContainer>
      <Card title="标准列表" bordered={false} extra={extraContent}>
        <List
          size="large"
          loading={loading}
          rowKey="id"
          itemLayout="vertical"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <Space key="star">
                  <StarOutlined />
                  {item.star}
                </Space>,
                <Space key="like">
                  <LikeOutlined />
                  {item.like}
                </Space>,
                <Space key="message">
                  <MessageOutlined />
                  {item.message}
                </Space>,
                <Dropdown
                  key="more"
                  menu={{
                    items,
                    onClick: ({ key }) => handleMenuClick(key, item),
                  }}
                >
                  <Button type="text" icon={<MoreOutlined />} />
                </Dropdown>,
              ]}
              extra={
                <div style={{ width: 272 }}>
                  <div style={{ marginBottom: 8 }}>项目进度</div>
                  <Progress percent={item.percent} status="active" />
                </div>
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} size={48} />}
                title={<a href={item.href}>{item.title}</a>}
                description={
                  <div>
                    <div style={{ marginBottom: 12 }}>{item.description}</div>
                    <div style={{ color: '#666' }}>
                      by {item.owner} 更新于 {item.updatedAt}
                    </div>
                  </div>
                }
              />
              <div style={{ marginTop: 16 }}>
                <Avatar.Group>
                  {item.members.map((member) => (
                    <Avatar
                      key={member.id || member.avatar}
                      src={member.avatar}
                    />
                  ))}
                </Avatar.Group>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </PageContainer>
  );
};

export default StandardList;
