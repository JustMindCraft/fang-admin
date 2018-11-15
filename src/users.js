// in src/users.js
import React from 'react';
import moment from 'moment';
import { List, Datagrid, TextField, EmailField, FunctionField } from 'react-admin';

require("moment/locale/zh-cn.js");
moment.locale('zh-cn');



export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="username" label="用户名"/>
            <EmailField source="email" label="邮箱" />
            <FunctionField label="注册时间" render={record => `${moment(record.createdAt).format("lll")}`}
                 />
        </Datagrid>
    </List>
);