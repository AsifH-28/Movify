import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './header.scss';

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const menuItems = [
    { label: <Link to="/">Home</Link>, key: 'home' },
    { label: <Link to="search">Search</Link>, key: 'search' },
    { label: <Link to="/about">About</Link>, key: 'about' },
  ];

  return (
    <Header style={{ backgroundColor: '#1f1f1f', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:'20px' }}>
      <div className="logo" style={{ color: 'white', fontSize: '20px',fontFamily:'Poppins'}}>Movify</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={menuItems}
        className="custom-menu"
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          flex: 1,
          justifyContent: 'flex-end'
        }}
      />
    </Header>
  );
};

export default HeaderComponent;


