import React, { Component } from 'react';
// import { Router, Route, browserHistory, IndexRoute,hashHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import App from '../entry/app';
import a from '../views/a';


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
        return (
            <Router>
                <Route path="/" component={App}>

                </Route>
            </Router>
        )
    }
}

export default routes
