import React, {Component} from 'react';

import '../css/app.css';
import {Layout, Menu, Breadcrumb, Icon,Row, Col,Progress,Button} from 'antd';




class a extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:0,
            collapsed: false,
            mode: 'inline',

         }
    }

    clickTen(){
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render() {

        return (
            <div >
                <Greeting isLoggedIn={this.state.collapsed} />

                <Button onClick={this.clickTen.bind(this)}>按钮</Button>

            </div>
        );
    }
}

export default a;


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
//定义组件的最简单的方法是编写一个JavaScript函数：
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.111</h1>;
}