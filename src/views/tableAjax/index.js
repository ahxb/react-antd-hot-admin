import React, {Component} from 'react';
import { Table } from 'antd';
import reqwest from 'reqwest';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: 'Email',
    dataIndex: 'email',
}];

class tableajax extends Component {
    state = {
        data: [],
        pagination: {},
        loading: false,
    };
    //翻页的时候
    handleTableChange (pagination, filters, sorter) {
        console.log(111,pagination, filters, sorter);
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;//第几页

        //下一页的时候更新下视图
        this.setState({
            pagination: pager,
        });
        //在请求一个ajax
        this.fetch({
            results: pagination.pageSize,//一页多少条
            page: pagination.current,//第几页
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }
    fetch (params = {}){
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                ...params, ////合并对象 params里面有的对象会 覆盖results：10
            },
            type: 'json',
        }).then((data) => {
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 100;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });


        });
    }
    componentDidMount() {
        this.fetch();

    }
    render() {
        return (
            <Table columns={columns}
                   rowKey={record => record.registered}
                   dataSource={this.state.data}
                   pagination={this.state.pagination}
                   loading={this.state.loading}
                   onChange={this.handleTableChange.bind(this)}
            />
        );
    }
}

export default tableajax;