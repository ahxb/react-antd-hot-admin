import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import '../css/app.css';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';


import { connect } from 'react-redux';

import * as actions from '../actions';

import {bindActionCreators} from 'redux';


class f extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:0,
            collapsed: false,
            mode: 'inline',
        }
    }


    render() {
        let logo = '';

        return (
            <div >
              fffffffffffffff  <div>{this.props.xxx}</div>
            </div>
        );
    }
}


function state2props (state) {
    return {
        xxx: state.app
    }
}
function action2props (dispatch) {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return {
        acs: boundActionCreators
    }
}
export default connect(state2props,action2props)(f);