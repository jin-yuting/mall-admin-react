/* 
 * @Description: 分类管理
 * @Author: jinyt
 * 
*/
import React, { useState } from 'react';
import { Card, Space, Table, Button } from 'antd';
import {
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import '@s/base.css';

const columns = [
  {
    title: '分类',
    dataIndex: 'name',
    key: 'name',
    width: 600,
  },
  {
    title: '排序值',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '添加时间',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>修改</a>
        <a>下级分类</a>
        <a>删除</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: '生活电器',
    age: 32,
    address: '2023-04-20 20:02:02',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '卫生用品101',
    age: 42,
    address: '2023-04-20 20:02:02',
    tags: ['loser'],
  },
  {
    key: '3',
    name: '上新服饰',
    age: 32,
    address: '2023-04-20 20:02:02',
    tags: ['cool', 'teacher'],
  },
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};
export default function Category() {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <section className='main-container'>
      <Card
        style={{
          width: '100%',
        }}
      >
        <div style={{
          marginBottom: '10px',
        }}>
          <Button style={{
            marginRight: '10px',
          }}
          type="primary" ><PlusOutlined />增加</Button>
          <Button danger><DeleteOutlined />批量删除</Button>
        </div>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns} dataSource={data} />
      </Card>
    </section>
  );
}
