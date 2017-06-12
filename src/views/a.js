import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import '../css/app.css';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

import Aa from './aa';


class a extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:0,
            collapsed: false,
            mode: 'inline',
        }
    }

    childleo(data){
        let self=this;
        this.setState({
            data:this.state.data+1,
        })
        console.log(11,data);
    }

    render() {
        let logo = '';

        return (
            <div >
                <Button>{this.state.data}</Button>
                    {/*name 传的字符串  child 传的方法用于子组件修改父组件的state状态*/}
                    <Aa name="leo" child={this.childleo.bind(this)}>1</Aa>
            </div>
        );
    }
}

export default a;
