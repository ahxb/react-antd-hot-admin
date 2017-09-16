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
            mode: 'inline',
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        let logo = '';

        return (
            <div className="boxdiv">
                <Button type="primary" onClick={this.showModal}>Open</Button>
                <Modal
                    title="leo-移动modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    maskClosable={false}
                    width={500}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
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