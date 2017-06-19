import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import '../css/ai.scss';
import {Layout, Menu, Breadcrumb, InputNumber , Icon,Collapse ,Row, Col } from 'antd';


import Panl from './badminton/panl'

import { connect } from 'react-redux';
import * as actions from '../actions';

import {bindActionCreators} from 'redux';


class ai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            arr:[
                    [
                        {
                            store:'a',
                            id:1,
                            chick:true,
                            unitPrice:639,
                            totalPrice:639,
                            img:'/static/1.png',
                            inventory:58,
                            name:'王者之剑1',
                            package:"套餐B",
                            number:1,
                        },
                        {
                            store:'a',
                            id:2,
                            chick:true,
                            unitPrice:1600,
                            totalPrice:1600,
                            img:'/static/2.png',
                            inventory:90,
                            name:'王者之剑2',
                            package:"套C",
                            number:1,
                        },
                    ],[

                        {
                            store:'b',
                            id:3,
                            chick:true,
                            unitPrice:2333,
                            totalPrice:2333,
                            img:'/static/1.png',
                            inventory:80,
                            name:'王者之剑1',
                            package:"套餐B",
                            number:1,
                        },
                        {
                            store:'b',
                            id:4,
                            chick:true,
                            unitPrice:1111,
                            totalPrice:1111,
                            img:'/static/2.png',
                            inventory:60,
                            name:'王者之剑2',
                            package:"套C",
                            number:1,
                        },
                    ],[

                        {
                            store:'c',
                            id:5,
                            chick:true,
                            unitPrice:222,
                            totalPrice:222,
                            img:'/static/1.png',
                            inventory:88,
                            name:'王者之剑1',
                            package:"套餐B",
                            number:1,
                        },
                    ],
            ],

        }
    }

    componentDidUpdate(prevProps, prevState){

        //勾选
        if (prevProps.chick.chickTrigger!==this.props.chick.chickTrigger ) {

            this.chickOnchange(this.props.chick.chickID,this.props.chick.chickIndex);
        };

        //数量变化
        if(prevProps.chick.numVAL!==this.props.chick.numVAL ){

            this.change(this.props.chick.numID,this.props.chick.numVAL,this.props.chick.numI);
        }
    }
    change(id,val,index){

        // console.log(111,id,val,index);


        let nextArr = this.state.arr[index].map(item=>{
                if(item.id === id ){
                    return {...item, number: val, totalPrice: item.unitPrice * val}
                }else{
                    return item
                }
        });

        let newArr=[...this.state.arr];
        newArr[index]=nextArr;

        this.setState({
            arr: newArr
        })

    }
    chickOnchange(id,index){

        let nextArr = this.state.arr[index].map(item=>{
            if(item.id === id ){
                return {...item, chick: !item.chick}
            }else{
                return item
            }
        });
        let newArr=[...this.state.arr];
        newArr[index]=nextArr;

        this.setState({
            arr: newArr
        })

    }
    sumit(){
        console.log('提交ajax',this.state.arr);
    }

    render() {
        let arrList=[],money=[],sum=0,num=[],mumSum=0;
        let panlArr=[];



        this.state.arr.forEach((item,i)=>{
            panlArr.push(<Panl  key={i} data={item} index={i}     />);

            item.forEach((res,i)=>{

                    if(res.chick){
                        money.push(res.totalPrice);
                        num.push(res.number);
                    }
            })
        });


        if(money.length>0){
            money.forEach((item)=>{
                sum+=item
            });
            num.forEach((item)=>{
                mumSum+=item
            })
        }

        return (
            <div className="ai">


                {panlArr}


                <div className="ai-botton">
                    <Row className="ai-b-height" type="flex"   align="middle">
                        <Col offset={16} span={4}>
                            <div>
                                共<span className="red">&nbsp;{mumSum}&nbsp;</span>件商品，总价
                                <span className="red font-size">￥{sum}</span>
                            </div>
                            <div >
                                不含运费
                            </div>
                        </Col>
                        <Col  span={2}>
                            <Button type="primary" onClick={this.sumit.bind(this)} className="backgroundred">去结算</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

// export default ai;

function state2props (state) {
    return {
        //这里是reducer的名字
        chick: state.common
    }
}

export default connect(state2props)(ai);