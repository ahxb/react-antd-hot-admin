import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import '../css/ai.scss';
import {Layout, Menu, Breadcrumb, InputNumber , Icon,Collapse ,Row, Col } from 'antd';
import List from './badminton/list'
// import goodsData from './goodsData';


class ai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            arr:[
                 {
                     id:1,
                     chick:true,
                     unitPrice:639,
                     totalPrice:639,
                     img:'/static/1.png',
                    inventory:9,
                    name:'王者之剑1',
                    package:"套餐B",
                     number:1,
                 },
                {
                    id:2,
                    chick:true,
                    unitPrice:1600,
                    totalPrice:1600,
                    img:'/static/2.png',
                    inventory:30,
                    name:'王者之剑2',
                    package:"套C",
                    number:1,
                },
            ]



        }
    }


    change(id,val){



        let nextArr = this.state.arr.map(item=>{
                if(item.id === id ){
                    return {...item, number: val, totalPrice: item.unitPrice * val}
                }else{
                    return item
                }
        });

        this.setState({
            arr: nextArr
        })

    }
    chickOnchange(id){
        let nextArr = this.state.arr.map(item=>{
            if(item.id === id ){
                return {...item, chick: !item.chick}
            }else{
                return item
            }
        });

        this.setState({
            arr: nextArr
        })

    }
    render() {
        let arrList=[],money=[],sum=0,num=[],mumSum=0;
        // const selNum = this.state.selNum;

        this.state.arr.forEach((item,i)=>{
            arrList.push(<List key={i} data={item}  child={this.change.bind(this)} chickOnchange={this.chickOnchange.bind(this)}/>);
            if(item.chick){
                money.push(item.totalPrice);
                num.push(item.number);
            }
        });

        if(money.length>0){
            money.forEach((item)=>{
                sum+=item
            })
        }
        if(num.length>0){
            num.forEach((item)=>{
                mumSum+=item
            })
        }

        return (
            <div className="ai">

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

                <div className="ai-botton">
                    <Row className="ai-b-height" type="flex"   align="middle">
                        <Col offset={18} span={3}>
                            <div>
                                共<span className="red">&nbsp;{mumSum}&nbsp;</span>件商品，总价
                                <span className="red font-size">￥{sum}</span>
                            </div>
                            <div >
                                不含运费
                            </div>
                        </Col>
                        <Col  span={2}>
                            <Button type="primary" className="backgroundred">去结算</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ai;
