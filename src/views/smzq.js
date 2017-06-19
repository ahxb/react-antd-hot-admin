import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import '../css/app.css';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';


import { connect } from 'react-redux';

import * as actions from './actions/actions';

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
    //这里setState 不会从新render 可以设置默认参数
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
    //：组件判断是否重新渲染时调用 必须要返回return true 更新 false 不更新
    shouldComponentUpdate( nextProps,  nextState){
        console.log('重新渲染',nextState);
        // return false
        return true
    }
    //组件 props 更新前调用，将要更新的 props 将会作为该方法的参数。//setState不会调用
    //如果需要更新状态以响应更改（例如，要重置它），则可以比较this.props和nextProps，并使用此方法中的this.setState（）执行状态转换。
    componentWillReceiveProps( nextProps){
        console.log(111,nextProps);
    }
    //: 组件卸载之前调用，此处应该进行组件使用资源的清理工作。
    //在此方法中执行任何必要的清理，例如无效定时器，取消网络请求或清除在componentDidMount中创建的任何DOM元素
    componentWillUnmount(){

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