import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { connect } from 'react-redux';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
        }
    }

    componentWilReceiveProps(nextProps) {
        if (nextProps.common.xxxTrigger !== this.props.common.xxxTrigger) {
            console.log('xxx id will chang...', this.props.common.xxxId, nextProps.common.xxxId);
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.common.xxxTrigger !== this.props.common.xxxTrigger) {
    //         console.log('xxx id changed...', this.props.common.xxxId);
    //     }
    // }

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
                            <Link to="/home">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/a">a</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/redux">redux</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/f">f</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team"/><span className="nav-text">Team</span></span>}
                    >
                        {/*<RouteLink to="/rgb" className="list-group-item">bbbbbbbbbbb</RouteLink>*/}
                        <Menu.Item   key="5">
                            <Link to="/smzq">生命周期</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/tjx">条件渲染和简单组件</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/zhorjc">组合与继承</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/table">table</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="19">

                                  <span>
                                    <Icon type="file"/>
                                         <Link to="/aiyukeyumaoqiu">爱羽客羽毛球</Link>
                                  </span>

                    </Menu.Item>
                </Menu>
            </Sider>



        );
    }
}

function mapStateToProps(state) {
    return {
        common: state.common
    };
}
export default connect(mapStateToProps)(Sidebar);

// export default Sidebar;