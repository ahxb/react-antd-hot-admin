import React, {Component} from 'react';
import './fetch.scss';
import {Layout, Menu,Row,Col,Button, Breadcrumb, Icon} from 'antd';


class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            dataaaa: 'hahahhahaha',
        }
    }
    _fetchget(){
        UTIL.get('http://127.0.0.1:3003/string',{
            name:'leo'
        }).then(data=>{
                console.log(11111111,data)
        })
    }
    _fetchpost(){
        console.log(22);
    }
    render() {
        let logo = '';

        return (
            <div className="fetchccss">
                <Row>
                    <Col span={6} className="border">
                        <Button onClick={this._fetchget.bind(this)}>fetchGet</Button>
                        <div>
                            fetchGet数据
                        </div>
                    </Col>
                    <Col span={6} className="border">
                        <Button onClick={this._fetchpost.bind(this)}>fetchPost</Button>
                        <div>
                            fetchPost数据
                        </div>
                    </Col>
                </Row>



            </div>
        );
    }
}

export default Fetch;
