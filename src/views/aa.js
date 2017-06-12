import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import '../css/app.css';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';


class aa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            dataaaa: 'hahahhahaha',
        }
    }

    click(){
        //获取父组件的属性
        // console.log(this.props.name);
        // console.log(this.props.child);

        //获取父组件的方法
        this.props.child(this.state.dataaaa)
    }

    render() {
        let logo = '';

        return (
            <div >
                <Button onClick={this.click.bind(this)}>aaaaaa</Button>
              11

            </div>
        );
    }
}

export default aa;
