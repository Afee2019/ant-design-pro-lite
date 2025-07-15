import { PageContainer } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import React from 'react';

const Exception403: React.FC = () => {
  const handleBackHome = () => {
    window.location.href = '/';
  };

  const handleContact = () => {
    console.log('联系管理员');
  };

  return (
    <PageContainer>
      <Result
        status="403"
        title="403"
        subTitle="抱歉，您没有权限访问此页面。"
        extra={
          <div>
            <Button
              type="primary"
              onClick={handleBackHome}
              style={{ marginRight: 8 }}
            >
              返回首页
            </Button>
            <Button onClick={handleContact}>联系管理员</Button>
          </div>
        }
      >
        <div style={{ textAlign: 'center', color: '#666', marginTop: 24 }}>
          <p>可能的原因：</p>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>您的账户权限不足</li>
            <li>该功能需要特殊授权</li>
            <li>您的会话已过期，请重新登录</li>
            <li>系统正在维护中</li>
          </ul>
          <p style={{ marginTop: 16 }}>
            如需帮助，请联系系统管理员或技术支持团队。
          </p>
        </div>
      </Result>
    </PageContainer>
  );
};

export default Exception403;
