import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';

import {Table, Layout, Menu, Breadcrumb, Icon,Popconfirm,Input} from 'antd';

//编辑取消
class EditableCell extends Component{
    state = {
        value: this.props.value,
        editable: false,
    }
    handleChange  (e)  {
        const value = e.target.value;
        this.setState({ value });
    }
    check  ()  {
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit  ()  {
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input
                                value={value}
                                onChange={this.handleChange.bind(this)}
                                onPressEnter={this.check.bind(this)}
                            />
                            <Icon
                                type="check"
                                className="editable-cell-icon-check"
                                onClick={this.check.bind(this)}
                            />
                        </div>
                        :
                        <div className="editable-cell-text-wrapper">
                            {value || ' '}
                            <Icon
                                type="edit"
                                className="editable-cell-icon"
                                onClick={this.edit.bind(this)}
                            />
                        </div>
                }
            </div>
        );
    }
}


//编辑组件
class EditableTable extends Component{
    constructor(props) {
        super(props);
        this.columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            //这里的render 返回当前行的只 和 下标
            render: (text, record, index) => {
                console.log('xxx', text, record, index);

                return (
                    <EditableCell
                        value={text}
                        onChange={this.onCellChange(index, 'name')}
                    />
                );
            },
        }, {
            title: 'age',
            dataIndex: 'age',
        }, {
            title: 'address',
            dataIndex: 'address',
        }, {
            title: 'operation',
            dataIndex: 'operation',
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
                address: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
            }],
            count: 2,
        };
    }
    cancel(){
        console.log('我取消了');
    }
    onCellChange(index, key)  {
        return (value) => {
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
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
            <div>
                <EditableTable />
            </div>
        );
    }
}

export default aa;
