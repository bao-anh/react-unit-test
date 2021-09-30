import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { OrderedListOutlined, DollarOutlined } from '@ant-design/icons';
import StyledALeftBar from './styled';

const ALeftBar = () => {
  const location = useLocation();
  return (
    <StyledALeftBar>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
      >
        <Menu.Item key="/" icon={<DollarOutlined />}>
          <Link to="/">Investment Plan</Link>
        </Menu.Item>
        <Menu.Item key="/todos" icon={<OrderedListOutlined />}>
          <Link to="/todos">Todo list</Link>
        </Menu.Item>
      </Menu>
    </StyledALeftBar>
  );
};

export default ALeftBar;
