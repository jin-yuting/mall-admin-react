/* 
 * @Description: 会员管理
 * @Author: jinyt
 * 
*/
import React, { useState } from 'react';
import { Card, Space, Table, Button, Input, Select, Col, Row } from 'antd';
import {
  DeleteOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import '@s/base.css';

const columns = [
  {
    title: '订单号',
    dataIndex: 'name',
    key: 'name',
    width: 600,
  },
  {
    title: '订单总价',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '支付方式',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '订单状态',
    dataIndex: 'status',
    key: 'status',
    render: (text) => text === 1 ? '禁用': '解用',
  },
  {
    title: '创建时间',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>关闭订单</a>
        <a>订单详情</a>
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
function Order() {
  const [selectionType, setSelectionType] = useState('checkbox');
  return(
    <section className='main-container'>
      <Card
        style={{
          width: '100%',
        }}
      >
        <Row style={{
          marginBottom: '10px',
        }}>
          <Col span={24}>
          <Input placeholder="请输入订单号" style={{
          marginRight: '10px',
          width: '200px',
        }} />
          <Select
            style={{
              marginRight: '10px',
              width: 200
            }}
            defaultValue="0"
            options={[
              { value: '0', label: '全部' },
              { value: '1', label: '待支付' },
              { value: '2', label: '已支付' },
              { value: '3', label: '配货完成' },
              { value: '4', label: '出库成功' },
              { value: '5', label: '交易成功' },
              { value: '6', label: '手动关闭' },
              { value: '7', label: '超时关闭' },
            ]}
          />
          <Button
            style={{
              marginRight: '10px',
            }}
            type="primary" ><HomeOutlined />出库</Button>
          <Button 
            style={{
              marginRight: '10px',
            }}
            type="primary"><HomeOutlined />配货完成</Button>
          <Button danger><DeleteOutlined />关闭订单</Button>
          </Col>
        </Row>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns} dataSource={data} />
      </Card>
    </section>
  )
}
export default Order;