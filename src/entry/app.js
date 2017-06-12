import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';

import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import a from '../views/a';
import b from '../views/b';
import f from '../views/f';
import Sidebar from '../components/Sider/sider';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
        }
    }

    onCollapse(collapsed) {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }

    render() {
        let logo = '';

        return (
            <div className="App">
                <Layout className="ant-layout-has-sider">
                    {/*侧边栏*/}
                    <Sidebar/>
                    <Layout>
                        <Header style={{background: '#ccc', padding: 0}}/>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '12px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                                {/*4.0渲染方式*/}
                                <Route exact path="/" component={a}/>
                                <Route path="/a" component={a}/>
                                <Route path="/b" component={b}/>
                                <Route path="/f" component={f}/>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
