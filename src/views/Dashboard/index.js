import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Admin from '../Basic/Admin'
import Change from '../Basic/Change'
import Add from '..//Books/Add'
import List from '../Books/List'
import Classify from '../Classify/Classify'
import Borrow from '../Lend/Borrow'
import Repay from '../Lend/Repay'
import Increase from '../User/Increase'
import Reader from '../User/Reader'
import Defuld from '../Defuld/index.js'
import Dateils from '../Books/Dateils'
import { Layout } from 'antd';
import TopHeader from './TopHeader'
import Broadside from './Broadside'
import './index.css'
// import {
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//   } from '@ant-design/icons';

const { Content } = Layout;
export default class index extends Component {
  state = {
    collapsed: false,
  };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };
  render() {
    return (
      <Layout>
        <Broadside></Broadside>
        <Layout className="site-layout">
          {/* 导航栏 */}
          <TopHeader></TopHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              {/* 首页 */}
              <Route path="/home" component={Home}></Route>
              {/* 基本操作 管理员管理 */}
              <Route path="/basic/admin" component={Admin}></Route>
              {/* 修改密码 */}
              <Route path="/basic/change" component={Change}></Route>
              {/* 图书添加 */}
              <Route path="/books/add" component={Add}></Route>
              {/* 图书管理 */}
              <Route path="/books/list" component={List}></Route>
              {/* 图书详情 */}
              <Route path="/books/dateils/:id" component={Dateils}></Route>
              {/* 图书分类 */}
              <Route path="/classify" component={Classify}></Route>
              {/* 借书管理 */}
              <Route path="/lend/borrow" component={Borrow}></Route>
              {/* 还书管理 */}
              <Route path="/lend/repay" component={Repay}></Route>
              {/* 添加读者 */}
              <Route path="/user/increase" component={Increase}></Route>
              {/* 读者管理 */}
              <Route path="/user/reader" component={Reader}></Route>
              {/* 重定向到home */}
              <Redirect from="/" to="/home" exact />
              <Route path="*" component={Defuld}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
