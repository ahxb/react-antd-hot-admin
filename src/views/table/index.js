import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import EditableCell from './dell'
import  './table.scss';
import {Table, Layout, Menu, Breadcrumb, Icon,Popconfirm,Input} from 'antd';



//表单
class EditableTable extends Component{
    constructor(props) {
        super(props);
        this.columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            className:'textcenter',
            //这里的render text 当前内容 record 当前行全部内容 index 下标
            //参数分别为当前行的值，当前行数据，行索引
            render: (text, record, index) => {


                return (
                    //编辑组件
                    <EditableCell
                        value={text}
                        onChange={this.onCellChange.bind(this,index, 'name')}
                    />
                );
            },
        }, {
            title: 'age',
            dataIndex: 'age',
            className:'textcenter',
        }, {
            title: 'sex',
            dataIndex: 'sex',
            className:'textcenter',
            render(text, record, index){
                if(text==1){
                    return '男人'
                }else if(text==2){
                    return '女人'
                }
            }
        }, {
            title: 'address',
            dataIndex: 'address',
            className:'textcenter',
        }, {
            title: 'operation',
            dataIndex: 'operation',
            className:'textcenter',
            //这里的render 返回当前行的只 和 下标
            render: (text, record, index) => {

                return (
                    this.state.dataSource.length > 1 ?
                        (
                            //onConfirm	点击确认的回调
                            //onCancel	点击取消的回调
                            <Popconfirm title="确定要删除吗?" onCancel={this.cancel.bind(this)} onConfirm={ this.onDelete.bind(this, index)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];

        this.state = {
            dataSource: [{
                key: '0',
                name: 'Edward King 0',
                age: '32',
                sex:'1',
                address: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                sex:'2',
                address: 'London, Park Lane no. 1',
            }],
            count: 2,
        };
    }
    cancel(){
        console.log('我取消了');
    }
    onCellChange(index, name)  {

        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][name] = value;
            this.setState({ dataSource });
        };
    }

    //删除操作
    onDelete  (index)  {
        //
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ dataSource });
    }
    //添加操作
    handleAdd  ()  {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd.bind(this)}>Add</Button>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}


class aa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            dataaaa: 'hahahhahaha',
        }
    }

    click(){
        //获取父组件的属性
        // console.log(this.props.name);
        // console.log(this.props.child);

        //获取父组件的方法
       console.log("dell");
    }
    onchange(){
        console.log(111121212);
    }
    render() {
        const self=this;




        return (
            <div className="tablecss">
                <EditableTable />
            </div>
        );
    }
}

export default aa;
