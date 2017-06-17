import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';

import {Layout, Menu, Breadcrumb, InputNumber , Icon,Collapse ,Row, Col } from 'antd';

import List from './list'
class panl extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: '',
        }
    }
    numchange(id,val,index){
        this.props.child(id,val,index);
    }
    chickOnchange(id,index){
        // console.log(id,index);
        this.props.chickOnchange(id,index);
    }
    render() {
        let arrList=[];

        if(this.props.data.length>0){
            this.props.data.forEach((item,i)=>{
                arrList.push(<List key={i} data={item} index={this.props.index}  child={this.numchange.bind(this)} chickOnchange={this.chickOnchange.bind(this)} />);
            });

        }

        return (
            <div className="ai-box">
                <div className="header">
                    <Row>
                        <Col offset={1} span={11}>本商品不限购</Col>
                        <Col span={12} className="red">在本处&nbsp;显示本组商品的&nbsp;总价&nbsp;运费&nbsp;信息</Col>
                    </Row>
                </div>
                <div className="ai-body">

                    {arrList}
                </div>
            </div>

        );
    }
}

export default panl;
