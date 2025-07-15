import { BugOutlined, ReloadOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Button, Collapse, Result, Typography } from 'antd';
import React, { useState } from 'react';

const { Panel } = Collapse;
const { Text, Paragraph } = Typography;

const Exception500: React.FC = () => {
  const [reportSent, setReportSent] = useState(false);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleBackHome = () => {
    window.location.href = '/';
  };

  const handleReportError = () => {
    setReportSent(true);
    setTimeout(() => setReportSent(false), 3000);
    console.log('错误报告已发送');
  };

  const errorDetails = {
    timestamp: new Date().toLocaleString(),
    errorId: `ERR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    userAgent: navigator.userAgent,
    url: window.location.href,
    stack: 'Internal Server Error - Contact Administrator',
  };

  return (
    <PageContainer>
      <Result
        status="500"
        title="500"
        subTitle="抱歉，服务器出现了一些问题。"
        extra={
          <div>
            <Button
              type="primary"
              icon={<ReloadOutlined />}
              onClick={handleRefresh}
              style={{ marginRight: 8 }}
            >
              重新加载
            </Button>
            <Button onClick={handleBackHome}>返回首页</Button>
          </div>
        }
      >
        <div style={{ maxWidth: 600, margin: '24px auto', textAlign: 'left' }}>
          {reportSent && (
            <Alert
              message="错误报告已发送"
              description="感谢您的反馈，我们将尽快处理此问题。"
              type="success"
              showIcon
              style={{ marginBottom: 24 }}
            />
          )}

          <Alert
            message="服务器错误"
            description="服务器遇到了意外情况，无法完成您的请求。我们的技术团队已经收到通知并正在处理此问题。"
            type="error"
            showIcon
            style={{ marginBottom: 24 }}
          />

          <div style={{ marginBottom: 24 }}>
            <h4>您可以尝试：</h4>
            <ul style={{ color: '#666', paddingLeft: 20 }}>
              <li>等待几分钟后重新加载页面</li>
              <li>检查网络连接是否正常</li>
              <li>清除浏览器缓存和Cookie</li>
              <li>尝试使用不同的浏览器</li>
              <li>联系技术支持获得帮助</li>
            </ul>
          </div>

          <Collapse ghost>
            <Panel header="技术详情" key="1">
              <div
                style={{
                  backgroundColor: '#f5f5f5',
                  padding: 16,
                  borderRadius: 6,
                }}
              >
                <Paragraph>
                  <Text strong>错误ID：</Text> {errorDetails.errorId}
                </Paragraph>
                <Paragraph>
                  <Text strong>发生时间：</Text> {errorDetails.timestamp}
                </Paragraph>
                <Paragraph>
                  <Text strong>页面地址：</Text>
                  <Text code>{errorDetails.url}</Text>
                </Paragraph>
                <Paragraph>
                  <Text strong>浏览器：</Text>
                  <Text code style={{ fontSize: 12 }}>
                    {errorDetails.userAgent}
                  </Text>
                </Paragraph>
                <Paragraph>
                  <Text strong>错误信息：</Text>
                  <Text code>{errorDetails.stack}</Text>
                </Paragraph>
              </div>
            </Panel>
          </Collapse>

          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <Button
              icon={<BugOutlined />}
              onClick={handleReportError}
              disabled={reportSent}
            >
              {reportSent ? '报告已发送' : '报告此错误'}
            </Button>
          </div>

          <div
            style={{
              marginTop: 24,
              padding: 16,
              backgroundColor: '#e6f7ff',
              borderRadius: 6,
              border: '1px solid #91d5ff',
            }}
          >
            <h4 style={{ color: '#1890ff', marginTop: 0 }}>需要帮助？</h4>
            <p style={{ margin: 0, color: '#666' }}>
              如果问题持续存在，请联系我们的技术支持团队：
              <br />📧 tech-support@example.com
              <br />📞 400-1234-5678 (工作日 9:00-18:00)
              <br />💬 在线客服 (24小时)
            </p>
          </div>
        </div>
      </Result>
    </PageContainer>
  );
};

export default Exception500;
