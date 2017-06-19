import React, {Component} from 'react';


import {Layout, Menu, Breadcrumb, InputNumber , Icon,Collapse ,Row, Col } from 'antd';




class list extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    numOnChange(id,value){
        this.props.child(id,value,this.props.index);


    }
    checkOnchange(id){
        this.props.chickOnchange(id,this.props.index);
    }
    render() {

        let props=this.props.data;



        return (
            <div className="ai-list">
                <Row className="ai-list-height" type="flex"   align="middle">
                    <Col offset={1}  span={1}>
                        <input type="checkbox" checked={props.chick} onChange={this.checkOnchange.bind(this,props.id)}/>
                    </Col>
                    <Col span={2}  >

                        <img src={props.img} className="ai-img"  alt=""/>

                    </Col>
                    <Col span={6}  >
                        <div>{props.name}</div>
                        <div className="red">{props.package}</div>
                    </Col>
                    <Col span={1}   >
                        <div>{props.unitPrice}</div>

                    </Col>
                    <Col span={3}   >
                        <div>
                            <InputNumber min={1} max={props.inventory} defaultValue={props.number} onChange={this.numOnChange.bind(this,props.id)}   />
                        </div>
                        <div><span>库存</span>{props.inventory}</div>
                    </Col>
                    <Col span={1}   >
                        <div>{props.totalPrice}</div>

                    </Col>
                    <Col span={1}   >

                        <div className="shoushi">
                            <Icon type="delete" />
                        </div>



                    </Col>

                </Row>
            </div>
        );
    }
}

export default list;
