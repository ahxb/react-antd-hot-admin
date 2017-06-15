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
    render() {

        return (
            <div >
                <WelcomeDialog></WelcomeDialog>

            </div>
        );
    }
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                11{props.title}
            </h1>
            <p className="Dialog-message">
                22{props.message}
            </p>
        </FancyBorder>
    );
}

function FancyBorder(props) {
    return (
        //获取props的color
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {/*props.children 吧所有的子组件显示出来*/}
            {props.children}
        </div>
    );
}
export default a;
