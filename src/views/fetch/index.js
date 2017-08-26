import React, {Component} from 'react';
import './fetch.scss';
import {Layout, Menu,Row,Col,Button, Breadcrumb, Icon} from 'antd';


class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            getData: '',
            postData:'',
        }
    }
    _fetchget(){
        UTIL.fget('http://127.0.0.1:3003/getA',{
            name:'leo'
        }).then(data=>{
                console.log(11111111,data);
                this.setState({getData:data.data.num})
        })
    }
    _fetchpost(){
        UTIL.fpost('http://127.0.0.1:3003/postA',{
            name:'leo',
            data:10000,
        }).then(data=>{
            console.log(2222,data);
            this.setState({
                postData:data.data.num
            })
        })
    }
    render() {
        let logo = '';

        return (
            <div className="fetchccss">
                <Row>
                    <Col span={6} className="border">
                        <Button onClick={this._fetchget.bind(this)}>fetchGet</Button>
                        <div>
                            fetchGet数据---{this.state.getData||'数据还没来'}
                        </div>
                    </Col>
                    <Col span={6} className="border">
                        <Button onClick={this._fetchpost.bind(this)}>fetchPost</Button>
                        <div>
                            fetchPost数据---{this.state.postData||'数据还没来'}
                        </div>
                    </Col>
                </Row>



            </div>
        );
    }
}

export default Fetch;
