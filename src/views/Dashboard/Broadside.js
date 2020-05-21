import React, { Component } from 'react'
import { Menu, Layout } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
export default class Broadside extends Component {
    state = {
        collapsed: false,
    };
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <h1 className="ant-menu-h1" >图书管理系统</h1>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                        </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                        </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                        </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

