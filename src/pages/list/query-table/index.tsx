import {
  DownloadOutlined,
  ReloadOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
  Table,
  Tag,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

const { Option } = Select;
const { RangePicker } = DatePicker;

interface DataType {
  key: string;
  id: string;
  name: string;
  status: string;
  type: string;
  createTime: string;
  updateTime: string;
  owner: string;
  description: string;
}

const QueryTable: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const mockData: DataType[] = [
    {
      key: '1',
      id: 'PROJ-001',
      name: '电商平台重构项目',
      status: 'active',
      type: 'web',
      createTime: '2024-01-15 14:30:00',
      updateTime: '2024-01-16 09:15:00',
      owner: '张三',
      description: '基于React的电商平台前端重构',
    },
    {
      key: '2',
      id: 'PROJ-002',
      name: '移动端APP开发',
      status: 'pending',
      type: 'mobile',
      createTime: '2024-01-10 10:20:00',
      updateTime: '2024-01-12 16:45:00',
      owner: '李四',
      description: 'React Native移动应用开发',
    },
    {
      key: '3',
      id: 'PROJ-003',
      name: '数据可视化平台',
      status: 'completed',
      type: 'web',
      createTime: '2024-01-05 11:10:00',
      updateTime: '2024-01-14 14:20:00',
      owner: '王五',
      description: '基于D3.js的数据可视化系统',
    },
    {
      key: '4',
      id: 'PROJ-004',
      name: '企业级CRM系统',
      status: 'inactive',
      type: 'desktop',
      createTime: '2024-01-01 09:00:00',
      updateTime: '2024-01-03 17:30:00',
      owner: '赵六',
      description: 'Electron桌面应用开发',
    },
  ];

  const [dataSource, setDataSource] = useState<DataType[]>(mockData);

  const columns: ColumnsType<DataType> = [
    {
      title: '项目ID',
      dataIndex: 'id',
      key: 'id',
      width: 120,
      fixed: 'left',
    },
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => {
        const statusMap = {
          active: { color: 'green', text: '进行中' },
          pending: { color: 'orange', text: '待开始' },
          completed: { color: 'blue', text: '已完成' },
          inactive: { color: 'red', text: '已停止' },
        };
        const config = statusMap[status as keyof typeof statusMap];
        return <Tag color={config.color}>{config.text}</Tag>;
      },
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      width: 100,
      render: (type: string) => {
        const typeMap = {
          web: 'Web应用',
          mobile: '移动应用',
          desktop: '桌面应用',
        };
        return typeMap[type as keyof typeof typeMap] || type;
      },
    },
    {
      title: '负责人',
      dataIndex: 'owner',
      key: 'owner',
      width: 100,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 180,
      sorter: (a, b) =>
        new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      width: 180,
      sorter: (a, b) =>
        new Date(a.updateTime).getTime() - new Date(b.updateTime).getTime(),
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      fixed: 'right',
      render: (_, _record) => (
        <Space size="middle">
          <a>编辑</a>
          <a>查看</a>
          <a style={{ color: '#ff4d4f' }}>删除</a>
        </Space>
      ),
    },
  ];

  const handleSearch = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      let result = mockData;

      if (values.name) {
        result = result.filter((item) =>
          item.name.toLowerCase().includes(values.name.toLowerCase()),
        );
      }

      if (values.status) {
        result = result.filter((item) => item.status === values.status);
      }

      if (values.type) {
        result = result.filter((item) => item.type === values.type);
      }

      if (values.owner) {
        result = result.filter((item) => item.owner.includes(values.owner));
      }

      setDataSource(result);
      setLoading(false);
    }, 500);
  };

  const handleReset = () => {
    form.resetFields();
    setDataSource(mockData);
  };

  const handleExport = () => {
    console.log('导出数据:', selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  return (
    <PageContainer>
      <Card title="查询表格" bordered={false}>
        <Form
          form={form}
          layout="inline"
          onFinish={handleSearch}
          style={{ marginBottom: 24 }}
        >
          <Form.Item name="name" label="项目名称">
            <Input placeholder="请输入项目名称" style={{ width: 200 }} />
          </Form.Item>

          <Form.Item name="status" label="状态">
            <Select placeholder="请选择状态" style={{ width: 120 }}>
              <Option value="">全部</Option>
              <Option value="active">进行中</Option>
              <Option value="pending">待开始</Option>
              <Option value="completed">已完成</Option>
              <Option value="inactive">已停止</Option>
            </Select>
          </Form.Item>

          <Form.Item name="type" label="类型">
            <Select placeholder="请选择类型" style={{ width: 120 }}>
              <Option value="">全部</Option>
              <Option value="web">Web应用</Option>
              <Option value="mobile">移动应用</Option>
              <Option value="desktop">桌面应用</Option>
            </Select>
          </Form.Item>

          <Form.Item name="owner" label="负责人">
            <Input placeholder="请输入负责人" style={{ width: 120 }} />
          </Form.Item>

          <Form.Item name="dateRange" label="创建时间">
            <RangePicker />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}
                loading={loading}
              >
                查询
              </Button>
              <Button icon={<ReloadOutlined />} onClick={handleReset}>
                重置
              </Button>
              <Button
                icon={<DownloadOutlined />}
                onClick={handleExport}
                disabled={selectedRowKeys.length === 0}
              >
                导出
              </Button>
            </Space>
          </Form.Item>
        </Form>

        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          scroll={{ x: 1200 }}
          pagination={{
            total: dataSource.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `第 ${range[0]}-${range[1]} 条/总共 ${total} 条`,
          }}
        />
      </Card>
    </PageContainer>
  );
};

export default QueryTable;
