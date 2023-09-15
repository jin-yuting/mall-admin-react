import React from 'react';
import { useNavigate,Outlet } from 'react-router-dom';
import { useState } from 'react';
import {
  PieChartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider  } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("首页", "/home", <PieChartOutlined />),
  getItem("模块管理", "sub1", <UnorderedListOutlined />, [
    getItem("分类管理", "/category"),
    getItem("商品管理", "/good"),
    getItem("会员管理", "/guest"),
    getItem("订单管理", "/order"),
  ]),
  getItem("系统管理", "sub2", <PieChartOutlined />, [
    getItem("修改密码", "/account"),
  ]),
];

function App() {
  const navigate = useNavigate();
  const [openKey, setOpenKey] = useState('/home');
  const pathKey = localStorage.getItem('pathKey');
  console.log(pathKey, 'pathKey------------------------');
  // setOpenKey(pathKey);
  const onClick = (e) =>{
    navigate('/layout'+ e.key);
    localStorage.setItem('pathKey', e.key)
  }
  return (
    <Layout>
      <Sider>
        <div className="logo">
          商城 admin
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[openKey]}
          mode="inline"
          items={items}
          onClick={ onClick }
        />
      </Sider>
      <Layout>
        <Header
            style={{
              padding: 0,
              color: '#fff',
            }}
          >
            Header
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "left",
            borderTop: '1px solid #e9e9e9',
            height: '50px',
            display: 'flex',
            padding: '0 20px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          Tina©2023
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;