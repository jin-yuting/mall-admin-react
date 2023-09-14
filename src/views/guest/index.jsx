/* 
 * @Description: 会员管理
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
    title: '昵称',
    dataIndex: 'name',
    key: 'name',
    width: 600,
  },
  {
    title: '登录名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '登录名',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '身份状态',
    dataIndex: 'status',
    key: 'status',
    render: (text) => text === 1 ? '禁用': '解用',
  },
  {
    title: '是否注销',
    dataIndex: 'logout',
    key: 'logout',
    render: (text) => text === 1 ? '正常': '非正常',
  },
  {
    title: '注册时间',
    dataIndex: 'address',
    key: 'address',
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
function Guest() {
  const [selectionType, setSelectionType] = useState('checkbox');
  return(
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
          type="primary" ><PlusOutlined />解除禁用</Button>
          <Button danger><DeleteOutlined />禁用账户</Button>
        </div>
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
export default Guest;