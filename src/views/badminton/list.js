import React, {Component} from 'react';


import {Button,Layout, Menu, Breadcrumb, InputNumber , Icon,Collapse ,Row, Col } from 'antd';

//链接redux
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import {bindActionCreators} from 'redux';


class list extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    numOnChange(id,value){
        // this.props.child(id,value,this.props.index);
        this.props.reduxFangfa.numOnChange(id,value,this.props.index);

    }
    checkOnchange(id){
        this.props.reduxFangfa.chickOnchange(id,this.props.index);
        // this.props.chickOnchange(id,this.props.index);
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

// export default list;


//发送 更改状态
function action2props (dispatch) {
    //import * as actions from '../actions';
    //bindActionCreators其实就是把多个action还是用dispatch调用
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return {
        reduxFangfa: boundActionCreators
    }
}
//发送 更改状态 前面必须要有 //显示rexux状态

export default connect(null, action2props)(list);