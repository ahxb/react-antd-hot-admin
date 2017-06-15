import React, {Component} from 'react';

import '../css/app.css';
import {Layout, Menu, Breadcrumb, Icon,Row, Col,Progress,Button} from 'antd';

import Aa from './aa';


class a extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:0,
            collapsed: false,
            mode: 'inline',
            arr:[
                {name: 'abc'}
            ],
        }
    }

    childleo(data){
        let self=this;
        this.setState({
            data:this.state.data+1,
        })
        console.log(11,data);
    }
    click(i){

        let  arr = this.state.arr.slice();

        arr.splice(i,1)

        this.setState({arr:  arr});
    }
    clickarr(){
        let  arr = this.state.arr.slice();
        this.setState({
            data:this.state.data+1,
        })
        arr.push({name: 'ccc'+this.state.data});
        this.setState({arr:  arr});

    }
    render() {
        let logo = '',arr=this.state.arr;
        let list = [];

        for (var i = 0; i<arr.length; i++) {
            list.push(<li key={i} onClick={this.click.bind(this,i)}>{arr[i].name}</li>)

        }
        return (
            <div >
                <Row>
                    <Col span={3}>
                        <ul>
                            {list}
                        </ul>
                    </Col>
                    <Col span={3}>

                        <Button onClick={this.clickarr.bind(this)}>{this.state.data}</Button>
                        {/*name 传的字符串  child 传的方法用于子组件修改父组件的state状态*/}
                        <Aa name="leo" child={this.childleo.bind(this)}>1</Aa>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default a;
