import React, {useState} from "react";
import { Layout } from "antd";
import { MenuSider } from "../../components/Navigation/MenuSider/MenuSider";
import { MenuTop } from "../../components/Navigation/MenuTop/MenuTop";
import { Logout } from "../../components/Navigation/Logout/Logout";
import "./AdminLayout.scss";

export const AdminLayout = (props) => {
  const { children } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="general-layout">
        <Header className="general-layout-header">
          <MenuTop 
            menuCollapsed={menuCollapsed} 
            setMenuCollapsed={setMenuCollapsed} 
          />
          <Logout className="general-layout-header-logout"></Logout>
          </Header>
        <Content className="general-layout-content">{children}</Content>
        <Footer className="general-layout-footer">
        </Footer>
      </Layout>
    </Layout>
  );
};