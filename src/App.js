// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

import {UserList} from './users';
import {RoleList} from './roles';

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider}  dataProvider={dataProvider} >
    <Resource name="users" options={{ label: '用户管理' }} list={UserList} />
    <Resource name="roles" options={{ label: '角色管理' }} list={RoleList} />
  </Admin>
);

export default App;