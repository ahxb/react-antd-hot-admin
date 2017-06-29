import React, {Component} from 'react';
import {Button} from 'antd';
import {Progress} from 'antd';
import '../css/boxdiv.scss';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';


import { connect } from 'react-redux';

import * as actions from './actions/actions';

import {bindActionCreators} from 'redux';


class home extends Component {
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
            <div className="boxdiv">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div>22</div>
                <div>       {this.props.xxx}</div>


            </div>
        );
    }
}


function state2props (state) {
    return {
        xxx: state.app.readd
    }
}
// function action2props (dispatch) {
//     const boundActionCreators = bindActionCreators(actions, dispatch);
//     return {
//         acs: boundActionCreators
//     }
// }
export default connect(state2props)(home);