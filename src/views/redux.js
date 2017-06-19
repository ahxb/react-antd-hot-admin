import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import '../css/app.css';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

//链接redux
import { connect } from 'react-redux';

import * as actions from '../actions';

import {bindActionCreators} from 'redux';

class b extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
        }

    }

    add(){
        //调用action里面的add方法
        this.props.reduxFangfa.add();

    }

    jian(){
        //调用action里面的jian方法
        this.props.reduxFangfa.jian();
    }



    render() {

        console.log(1111,this.props);

        return (
            <div >
                <Button onClick={this.add.bind(this)}>加</Button>
                <Button onClick={this.jian.bind(this)}>减</Button>
             
             
             
               <div>{this.props.xxx}</div>

            </div>
        );
    }
}


//显示rexux状态
function state2props (state) {
    return {
        xxx: state.readd
    }
}
//发送 更改状态
function action2props (dispatch) {
    //import * as actions from '../actions'; 
    //bindActionCreators其实就是把多个action还是用dispatch调用
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return {
        reduxFangfa: boundActionCreators
    }
}
export default connect(state2props,action2props)(b);