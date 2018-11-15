// in src/users.js
import React from 'react';
import moment from 'moment';
import { List, Datagrid, TextField, FunctionField } from 'react-admin';

require("moment/locale/zh-cn.js");
moment.locale('zh-cn');



export const RoleList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" label="角色名"/>
            <FunctionField label="创建时间" render={record => `${moment(record.createdAt).format("lll")}`}
                 />
        </Datagrid>
    </List>
);