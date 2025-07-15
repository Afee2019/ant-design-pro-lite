import {
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Avatar,
  Button,
  Card,
  Col,
  Input,
  Row,
  Select,
  Tag,
  Tooltip,
} from 'antd';
import React, { useState } from 'react';

const { Option } = Select;
const { Meta } = Card;

const CardList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('all');

  const mockData = [
    {
      id: 1,
      title: 'Alipay',
      description:
        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件。',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      owner: '付小小',
      href: '#',
      updatedAt: '9小时前',
      members: [
        'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
      ],
      activeUser: 198.2,
      newUser: 32,
      status: 'active',
      category: 'tech',
    },
    {
      id: 2,
      title: 'Angular',
      description:
        'Angular 是一个应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用。',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
      owner: '曲丽丽',
      href: '#',
      updatedAt: '2天前',
      members: [
        'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
      ],
      activeUser: 13.5,
      newUser: 6,
      status: 'pending',
      category: 'design',
    },
    {
      id: 3,
      title: 'Ant Design Pro',
      description:
        '基于 Ant Design 和 umi 的企业级前端应用框架，为中后台前端/设计语言方案提供专业的一体化解决方案。',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
      owner: '林东东',
      href: '#',
      updatedAt: '1周前',
      members: [
        'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      ],
      activeUser: 95.8,
      newUser: 15,
      status: 'completed',
      category: 'tech',
    },
    {
      id: 4,
      title: 'Ant Design',
      description:
        '一套企业级 UI 设计语言和 React 组件库，专注于中后台产品的最佳UI实践。',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
      owner: '周星星',
      href: '#',
      updatedAt: '1周前',
      members: [
        'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
      ],
      activeUser: 75.3,
      newUser: 24,
      status: 'active',
      category: 'business',
    },
    {
      id: 5,
      title: 'Bootstrap',
      description:
        '全球最受欢迎的前端开源工具库，利用 Bootstrap 快速设计和自定义响应式移动设备优先的网站。',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
      owner: '吴加好',
      href: '#',
      updatedAt: '2周前',
      members: [
        'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
      ],
      activeUser: 142.6,
      newUser: 35,
      status: 'active',
      category: 'design',
    },
    {
      id: 6,
      title: 'React',
      description:
        'React 是一个用于构建用户界面的 JavaScript 库，它让交互式 UI 的创建变得轻而易举。',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
      owner: '朱偏右',
      href: '#',
      updatedAt: '3周前',
      members: [
        'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
      ],
      activeUser: 186.7,
      newUser: 47,
      status: 'completed',
      category: 'tech',
    },
  ];

  const [dataSource, setDataSource] = useState(mockData);

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
        result = result.filter((item) => item.category === category);
      }

      setDataSource(result);
      setLoading(false);
    }, 500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'green';
      case 'pending':
        return 'orange';
      case 'completed':
        return 'blue';
      default:
        return 'default';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return '进行中';
      case 'pending':
        return '待开始';
      case 'completed':
        return '已完成';
      default:
        return status;
    }
  };

  const nullCard = (
    <Card style={{ marginBottom: 24 }} bodyStyle={{ padding: 0 }}>
      <Button
        type="dashed"
        style={{
          width: '100%',
          height: 188,
          backgroundColor: '#fafafa',
          borderColor: '#d9d9d9',
        }}
        icon={<PlusOutlined />}
      >
        新建项目
      </Button>
    </Card>
  );

  return (
    <PageContainer>
      <Card title="卡片列表" bordered={false}>
        <div style={{ marginBottom: 24, display: 'flex', gap: 16 }}>
          <Input.Search
            placeholder="搜索项目"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onSearch={handleSearch}
            style={{ width: 272 }}
          />
          <Select
            value={category}
            onChange={(value) => {
              setCategory(value);
              setTimeout(handleSearch, 0);
            }}
            style={{ width: 120 }}
          >
            <Option value="all">全部分类</Option>
            <Option value="tech">技术</Option>
            <Option value="design">设计</Option>
            <Option value="business">商务</Option>
          </Select>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            {nullCard}
          </Col>
          {dataSource.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                style={{ marginBottom: 24 }}
                loading={loading}
                actions={[
                  <Tooltip key="download" title="下载">
                    <DownloadOutlined key="download" />
                  </Tooltip>,
                  <Tooltip key="edit" title="编辑">
                    <EditOutlined key="edit" />
                  </Tooltip>,
                  <Tooltip key="share" title="分享">
                    <ShareAltOutlined key="share" />
                  </Tooltip>,
                  <Tooltip key="ellipsis" title="更多">
                    <EllipsisOutlined key="ellipsis" />
                  </Tooltip>,
                ]}
              >
                <Meta
                  avatar={<Avatar src={item.avatar} size="small" />}
                  title={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <a href={item.href}>{item.title}</a>
                      <Tag color={getStatusColor(item.status)} size="small">
                        {getStatusText(item.status)}
                      </Tag>
                    </div>
                  }
                  description={
                    <div>
                      <div
                        style={{
                          height: 44,
                          overflow: 'hidden',
                          marginBottom: 12,
                          lineHeight: '22px',
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
                      <div
                        style={{ marginTop: 8, fontSize: 12, color: '#666' }}
                      >
                        活跃用户: {item.activeUser}万 | 新增用户: {item.newUser}
                        万
                      </div>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </PageContainer>
  );
};

export default CardList;
