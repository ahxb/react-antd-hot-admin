import React, {Component} from 'react';

import { Modal, Button } from 'antd';
import '../css/boxdiv.scss';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';


import { connect } from 'react-redux';

import * as actions from './actions/actions';

import {bindActionCreators} from 'redux';


class home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visible2: false,
            visible3:false,
            mode: 'inline',
        }
    }

    showModal = (modal) => {
        console.log(111,modal);
        this.setState({
            [modal]: true,
        });
    }
    handleOk = (modal,e) => {
        console.log(e);
        this.setState({
            [modal]: false,
        });
    }
    handleCancel = (modal) => {
        console.log(modal);
        this.setState({
            [modal]: false,
        });
    }
    _clcikBtn(){

    }
    render() {
        let logo = '';

        return (
            <div className="boxdiv">
                <Button type="primary" onClick={this.showModal.bind(this,'visible')}>Open</Button>
                <Modal
                    title="leo-移动modal"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this,'visible')}
                    onCancel={this.handleCancel.bind(this,'visible')}
                    maskClosable={false}
                    width={500}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p><Button onClick={this.showModal.bind(this,'visible2')}>按钮</Button></p>
                </Modal>

                <Modal
                    title="leo-移动modal"
                    visible={this.state.visible2}
                    onOk={this.handleOk.bind(this,'visible2')}
                    onCancel={this.handleCancel.bind(this,'visible2')}
                    maskClosable={false}
                    width={500}
                >
                    <p><Button onClick={this.showModal.bind(this,'visible3')}>按钮</Button></p>


                    <div>222222222222</div>

                </Modal>

                <Modal
                    title="leo-移动modal"
                    visible={this.state.visible3}
                    onOk={this.handleOk.bind(this,'visible3')}
                    onCancel={this.handleCancel.bind(this,'visible3')}
                    maskClosable={false}
                    width={500}
                >
                    <div>222222222222</div>

                </Modal>
            </div>
        );
    }
}


function state2props (state) {
    return {
        xxx: state.app.readd
    }
}
// function action2props (dispatch) {
//     const boundActionCreators = bindActionCreators(actions, dispatch);
//     return {
//         acs: boundActionCreators
//     }
// }
export default connect(state2props)(home);