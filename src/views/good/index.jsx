/* 
 * @Description: 商品管理
 * @Author: jinyt
 * 
*/
import React, { useState } from 'react';
import { Card, Space, Table, Button } from 'antd';
import {
  PlusOutlined,
} from '@ant-design/icons';
import '@s/base.css';

const columns = [
  {
    title: '商品编号',
    dataIndex: 'name',
    key: 'name',
    width: 600,
  },
  {
    title: '商品名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '商品简介',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '商品库存',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '商品售价',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    render: (text) => text === 1 ? '销售中': '-',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>修改</a>
        <a>下架</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: '14790155691',
    age: 32,
    address: '2023-04-20 20:02:02',
    tags: ['nice', 'developer'],
    status: 1,
    logout: 1,
  },
  {
    key: '2',
    name: '15216664809',
    age: 42,
    address: '2023-04-20 20:02:02',
    tags: ['loser'],
    status: 1,
    logout: 1,
  },
  {
    key: '3',
    name: '13402058488',
    age: 32,
    address: '2023-04-20 20:02:02',
    tags: ['cool', 'teacher'],
    status: 0,
    logout: 0,
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

export default function Good() {
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
          type="primary" ><PlusOutlined />新增商品</Button>
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