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
            json:{
                a:{
                    b:2
                },
                c:0

            }
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
        //先把数组拷贝出来在 setstate 更新视图
        let  arr = this.state.arr.slice();
        this.setState({
            data:this.state.data+1,
        })
        arr.push({name: 'ccc'+this.state.data});
        this.setState({arr:  arr});

    }
    clickJson(){
        //先把json拷贝出来在 setstate 更新视图
        let json2=Object.assign({},this.state.json.a);
        json2.b=99;
        this.setState({
            json:{
                a:json2
            }
        })


    }
    render() {
        let logo = '',arr=this.state.arr;
        let list = [];

        // for (var i = 0; i<arr.length; i++) {
        //     list.push(<li key={i} onClick={this.click.bind(this,i)}>{arr[i].name}</li>)
        //
        // }
        arr.forEach((item,i)=>{
            list.push(<li key={i} onClick={this.click.bind(this,i)}>{item.name}</li>)
        })
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

                        {/*json操作*/}
                        <Button onClick={this.clickJson.bind(this)}>json操作</Button>
                        <div>{this.state.json.a.b} </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default a;
