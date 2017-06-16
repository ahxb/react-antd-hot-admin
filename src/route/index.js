import React, { Component } from 'react';
// import { Router, Route, browserHistory, IndexRoute,hashHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import App from '../entry/app';



// const validate = function (next, replace, callback) {
//   const isLoggedIn = !!window.localStorage.getItem('uid')
//   if (!isLoggedIn && next.location.pathname != '/login') {
//     replace('/login')
//   }
//   callback()
// }
//



class routes extends React.Component {
    render () {
        const { store, history } = this.props;

        return (
        <Provider store={store}>
            <Router>
                <Route path="/" component={App}>

                </Route>
            </Router>
        </Provider>
        )
    }
}

export default routes
