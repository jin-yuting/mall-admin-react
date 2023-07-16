import React from 'react';
import { useNavigate,Outlet } from 'react-router-dom';
import { useState } from 'react';
import {
  PieChartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;

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
    // getItem("商品管理", "4"),
    getItem("会员管理", "/guest"),
    // getItem("订单管理", "5",),
  ]),
  // getItem("Team", "sub2", <PieChartOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
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
          }}
        />
        <Content>
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Tina©2023
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;