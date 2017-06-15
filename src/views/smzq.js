import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import '../css/app.css';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';


import { connect } from 'react-redux';

import * as actions from '../actions';

import {bindActionCreators} from 'redux';


class smzq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:0,
            collapsed: false,
            mode: 'inline',
        }
    }
    clickBtn(){
        this.setState({
            data:this.state.data+1
        })

    }
    //组件加载之前调用，整个组件的生命周期中只会调用一次。此时可以访问到组件初始的 props 和 state，
    // 并且在这个方法中操作 state 会直接反映在接下来的组件渲染中而不是再次更新组件，此时还不能访问 DOM。
    //这里setState 不会从新render
    componentWillMount(){

    }
    //页面加载完成后触发  ajax一般写在这里 数据加载了 setState 会从新render
    componentDidMount(){
        console.log("dom操作");
    }
    //组件更新之前调用，新的 props 和 state 将会作为该方法的参数
    componentWillUpdate(nextProps, nextState){
        console.log(nextState);

    }
    //组件更新完成后调用，旧的 props 和 state 将会作为该方法的参数
    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
    }
    render() {
        let logo = '';

        return (
            <div >
               生命周期<div>{this.state.data}</div>
                <Button onClick={this.clickBtn.bind(this)}>按钮</Button>
            </div>
        );
    }
}

export default smzq;