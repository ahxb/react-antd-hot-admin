import React, {Component} from 'react';


import { Modal, Button } from 'antd';

class modal extends React.Component {
    state = {
        visible: false ,
        visible2: false,
    }
    showModal = () => {
        this.setState({
            visible: true,

        });
    }
    showModal2 = () => {
        this.setState({
            visible2: true,

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
    handleOk2 = (e) => {
        console.log(e);
        this.setState({
            visible2: false,
        });
    }
    handleCancel2 = (e) => {
        console.log(e);
        this.setState({
            visible2: false,
        });
    }
    click(){
        alert()
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Open</Button>
                <Modal
                    title="leo Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    onClick={this.click.bind(this)}
                >
                    <p>  <Button type="primary" onClick={this.showModal2}>Open2222</Button></p>
                    <p>Some contents...</p>
                    <p  >Some contents...</p>
                </Modal>



                <Modal
                    title="leo222 Modal"
                    visible={this.state.visible2}
                    onOk={this.handleOk2}
                    onCancel={this.handleCancel2}
                >
                    <p>  2222</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}


export default modal;
