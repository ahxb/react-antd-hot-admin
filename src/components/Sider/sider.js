import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
class Sidebar extends Component {
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



            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse.bind(this)}
            >
                <div className="logo"/>
                <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user"/><span className="nav-text">User</span></span>}
                    >
                        <Menu.Item key="1">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/a">a</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/b">b</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team"/><span className="nav-text">Team</span></span>}
                    >
                        {/*<RouteLink to="/rgb" className="list-group-item">bbbbbbbbbbb</RouteLink>*/}
                        <Menu.Item to="/a" key="4">Team 1</Menu.Item>
                        <Menu.Item key="5">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                                  <span>
                                    <Icon type="file"/>
                                    <span className="nav-text">File</span>
                                  </span>
                    </Menu.Item>
                </Menu>
            </Sider>



        );
    }
}

export default Sidebar;