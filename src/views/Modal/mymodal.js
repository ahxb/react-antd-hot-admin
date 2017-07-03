import React, {Component} from 'react';
import './modal.scss';
import {Button} from 'antd';
import Modal from '../../utils/modal/index'

class mymodal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,

        }
    }
    click(){
        this.setState({
            collapsed: true,
        },function () {
            console.log(this.state.collapsed);
        })


    }

    render() {
        return (
            <div>

                <Button className='button' onClick={this.click.bind(this)}>modalmove</Button>

                <Modal visible={this.state.collapsed}/>

            </div>
        );
    }
}


export default mymodal;
