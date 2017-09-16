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
import aa from '../views/aa';
import redux from '../views/redux';
import f from '../views/f';
import smzq from '../views/smzq';
import tjx from '../views/tjxrzuhejc';
import zhorjc from '../views/zhorjc';
import home from '../views/home';
import aiyukeyumaoqiu from '../views/aiyukeyumaoqiu';
import table from '../views/table';
import tableAjax from '../views/tableAjax';
import Modal from '../views/Modal';
import myModal from '../views/Modal/mymodal';

import Sidebar from '../components/Sider/sider';
import Fetch from '../views/fetch';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
        }
    }

    componentDidMount(){
        $(window).on('mousedown',function (e) {
            e.preventDefault();
            e.stopPropagation();

            let $obj=$(e.target).closest('.ant-modal');
            let positionDiv = $obj.offset();

            let distenceX ='';
            let distenceY ='';
            if( $obj.length!==0){
                 distenceX = e.pageX - positionDiv.left;
                 distenceY = e.pageY - positionDiv.top;

                if($(e.target).hasClass('ant-modal-header')||$(e.target).hasClass('ant-modal-title')){
                    $(window).on('mousemove',function(ent){

                        let x = ent.pageX-distenceX;
                        let y = ent.pageY-distenceY;

                        if(x<0){
                            x=0;
                        }else if(x>$(document).width()-$obj.outerWidth(true)){
                            x = $(document).width()-$obj.outerWidth(true);
                        }
                        if(y<0){
                            y=0;
                        }else if(y>$(document).height()-$obj.outerHeight(true)){
                            y = $(document).height()-$obj.outerHeight(true);
                        }
                        $obj.css({
                            'left':x+'px',
                            'top':y+'px'
                        });

                    })
                }

            }


        });
        $(window).on('mouseup',function (e) {
            $(window).off('mousemove')
        })

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
                                <Breadcrumb.Item>yang</Breadcrumb.Item>
                                <Breadcrumb.Item>leo</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                                {/*4.0渲染方式 path是路由地址  component是加载的组件*/}
                                <Route exact path="/" component={a}/>
                                <Route path="/a" component={a}/>
                                <Route path="/aa" component={aa}/>
                                <Route path="/home" component={home}/>
                                <Route path="/redux" component={redux}/>
                                <Route path="/f" component={f}/>
                                <Route path="/smzq" component={smzq}/>
                                <Route path="/tjx" component={tjx}/>
                                <Route path="/zhorjc" component={zhorjc}/>
                                <Route path="/aiyukeyumaoqiu" component={aiyukeyumaoqiu}/>
                                <Route path="/table" component={table}/>
                                <Route path="/tableAjax" component={tableAjax}/>
                                <Route path="/Modal" component={Modal}/>
                                <Route path="/myModal" component={myModal}/>
                                <Route path="/Fetch" component={Fetch}/>
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
