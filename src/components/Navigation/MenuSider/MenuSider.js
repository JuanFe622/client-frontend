import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import "./MenuSider.scss";

export const MenuSider = (props) => {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "Home",
      icon: <HomeOutlined />,
      label: "Asignaturas",
    },

    {
      key: "clients",
      icon: <TeamOutlined />,
      label: "Metodologia",
    },

    {
      key: "menu",
      icon: <TeamOutlined />,
      label: "Fases Metodologia",
    },

    {
      key: "services",
      icon: <AppstoreOutlined />,
      label: "Asignaturas - Metodologia",
    },

    {
      key: "users",
      icon: <TeamOutlined />,
      label: "Resumen",
    },
  ];

  const navigateTo = (e) => {
    const path = `/admin/${e.key.toLowerCase()}`; // Construir la ruta con minúsculas
    navigate(path);
  };

  const itemRender = (item, index) => {
    const { icon, label, subMenu } = item;
    const isSelected = location.pathname === item.key;
    if (subMenu) {
      return (
        <Menu.SubMenu key={item.key} icon={icon} title={label}>
          {subMenu.map((subMenuItem) => (
            <Menu.Item key={subMenuItem.key} onClick={navigateTo}>
              {subMenuItem.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        key={item.key}
        icon={React.cloneElement(icon, { className: "menu-item-icon" })}
        className={
          isSelected ? "ant-menu-item ant-menu-item-selected" : "ant-menu-item"
        }
      >
        {label}
      </Menu.Item>
    );
  };
  return (
    <Sider className="menu-sider" collapsed={props.menuCollapsed}>
      <Menu
        mode="inline"
        onClick={navigateTo}
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={menuItems
          .filter((item) => item.subMenu)
          .map((item) => item.key)}
      >
        {menuItems.map((item) => itemRender(item))}
      </Menu>
    </Sider>
  );
};
