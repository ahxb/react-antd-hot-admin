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

    fun(){
       this.leo='yang';
       this.mumu='lin';
       return this.leo
    }
    click(){
      this.fun(this.leo=111)
       // leo.leo=111;
      console.log(this.fun());
    }

    render() {
        let logo = '';

        return (
            <div >
                <Button onClick={this.click.bind(this)}>function</Button>

            </div>
        );
    }
}

export default aa;
