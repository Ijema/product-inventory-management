import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home',<MailOutlined />, [
    
  ]),
  getItem('Category', 'sub2', <AppstoreOutlined />, [
    getItem('Equipment', '5'),
    getItem('Hair', '6'),
    getItem('Women Accesories', '7'),
    getItem('Women Shoes', '8'),
   
  ]),
  getItem('Inventory', 'sub4', <SettingOutlined />, [
    getItem('Income', '9'),
    getItem('Expenses', '10'),
    
  ]),
  
];
const Sidebar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Sidebar;