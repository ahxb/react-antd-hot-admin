/**
 * Created by leo-007 on 2017/6/29.
 */
import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';

import {Table, Layout, Menu, Breadcrumb, Icon,Popconfirm,Input} from 'antd';

//编辑组件
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
        console.log('点击我修改完成了');
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit  ()  {
        this.setState({ editable: true });
        console.log("点击我开始修改了");
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

                            <Icon type="edit"
                                  className="editable-cell-icon"
                                  onClick={this.edit.bind(this)}
                            />

                        </div>
                }
            </div>
        );
    }
}
export default EditableCell;