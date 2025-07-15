import { SearchOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Input, Result } from 'antd';
import React, { useState } from 'react';

const Exception404: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleBackHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      console.log('搜索:', searchText);
    }
  };

  const popularPages = [
    { name: '仪表盘', path: '/dashboard/analysis' },
    { name: '表单页', path: '/form/basic-form' },
    { name: '列表页', path: '/list/table-list' },
    { name: '详情页', path: '/profile/basic' },
  ];

  return (
    <PageContainer>
      <Result
        status="404"
        title="404"
        subTitle="抱歉，您访问的页面不存在。"
        extra={
          <div>
            <Button
              type="primary"
              onClick={handleBackHome}
              style={{ marginRight: 8 }}
            >
              返回首页
            </Button>
            <Button onClick={handleGoBack}>返回上页</Button>
          </div>
        }
      >
        <div
          style={{ textAlign: 'center', maxWidth: 500, margin: '24px auto' }}
        >
          <h4 style={{ color: '#666', marginBottom: 16 }}>您可以尝试：</h4>

          <div style={{ marginBottom: 24 }}>
            <Input.Search
              placeholder="搜索页面或功能"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onSearch={handleSearch}
              size="large"
              enterButton={<SearchOutlined />}
              style={{ maxWidth: 400 }}
            />
          </div>

          <div style={{ textAlign: 'left', color: '#666' }}>
            <h4 style={{ color: '#262626' }}>热门页面：</h4>
            <ul style={{ paddingLeft: 20 }}>
              {popularPages.map((page) => (
                <li key={page.path} style={{ marginBottom: 8 }}>
                  <a
                    href={page.path}
                    style={{ color: '#1890ff', textDecoration: 'none' }}
                    onMouseEnter={(e) => {
                      e.target.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.textDecoration = 'none';
                    }}
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 24, textAlign: 'left', color: '#666' }}>
            <h4 style={{ color: '#262626' }}>可能的原因：</h4>
            <ul style={{ paddingLeft: 20 }}>
              <li>网址输入错误</li>
              <li>页面已被删除或移动</li>
              <li>您没有访问权限</li>
              <li>链接已过期</li>
            </ul>
          </div>

          <div
            style={{
              marginTop: 24,
              padding: 16,
              backgroundColor: '#f5f5f5',
              borderRadius: 6,
            }}
          >
            <p style={{ margin: 0, color: '#666' }}>
              如果您认为这是一个错误，请联系技术支持：
              <br />📧 support@example.com
              <br />📞 400-1234-5678
            </p>
          </div>
        </div>
      </Result>
    </PageContainer>
  );
};

export default Exception404;
