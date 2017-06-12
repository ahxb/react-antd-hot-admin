import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import '../css/app.css';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

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

        this.add = this.add.bind(this);
        this.jian = this.jian.bind(this);
    }

    add(){
        //调用action里面的add方法
        this.props.acs.add();
    }

    jian(){
        //调用action里面的jian方法
        this.props.acs.jian();
    }



    render() {
        let logo = '';

        return (
            <div >
                <Button onClick={this.add}>加</Button>
                <Button onClick={this.jian}>减</Button>
             
             
             
               <div>{this.props.xxx}</div>

            </div>
        );
    }
}



function state2props (state) {
    return {
        xxx: state.reducer
    }
}
function action2props (dispatch) {
    //import * as actions from '../actions'; 
    //bindActionCreators其实就是把多个action还是用dispatch调用
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return {
        acs: boundActionCreators
    }
}
export default connect(state2props,action2props)(b);