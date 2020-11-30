import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, ProfileOutlined } from '@ant-design/icons';
import { Hub } from 'aws-amplify';
import checkUser from './checkUser';

const Nav = ({ current }) => {
  const [user, updateUser] = useState({});

  useEffect(
    () => {
      checkUser(updateUser);

      Hub.listen(
        'auth'
        , (data) => {
          // complex destructuring again- data.payload.event
          const { payload: { event } } = data;
          console.log('event: ', event);
          
          if (event === 'signIn' || event === 'signOut') {
            checkUser(updateUser)
          };
        }
      );
    }
    , []
  );

  return (
    <div>
      <Menu
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key='home'>
          <Link to={`/`}>
            <HomeOutlined />
            Home
          </Link>
        </Menu.Item>

        <Menu.Item key='profile'>
          <Link to='/profile'>
            <UserOutlined />
            Profile
          </Link>
        </Menu.Item>

        {
          user.isAuthorized
          && (
            <Menu.Item key='admin'>
              <Link to='/admin'>
                <ProfileOutlined />
                Admin
              </Link>
            </Menu.Item>
          )
        }
      </Menu>
      <h3>
        {user.username}
      </h3>
    </div>
  );
};

export default Nav;