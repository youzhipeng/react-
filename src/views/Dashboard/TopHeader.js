import React, { Component } from 'react'
import { Layout, Menu, Dropdown,Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
export default class TopHeader extends Component {
    state = {
        collapsed: false,
    };
    menu = (
        <Menu>
            <Menu.Item>
                <a  href="javascript:;">
                    超级管理员
            </a>
            </Menu.Item>
            <Menu.Item>
                <a  href="javascript:;">
                    退出
            </a>
            </Menu.Item>
        </Menu>
    );
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: '0 16px' }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    // onClick: this.toggle,
                })}
                <div style={{float:"right"}}>
                    <span style={{marginRight:'8px'}}>欢迎xx回来</span>
                    <Dropdown overlay={this.menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                    </Dropdown>
                </div>
            </Header>
        )
    }
}
