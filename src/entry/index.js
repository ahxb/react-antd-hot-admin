import 'react-hot-loader/patch';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import 'antd/dist/antd.css';

//redux store 热加载
import configStore from '../views/reducer';
// import configStore from '../views/badminton/badmintonRedux/reducer';

//fetchi请求
import util from '../utils';
//jq方法
import '../utils/public.js'

window.UTIL = util;

const store = configStore();
//路由
import RouteIndex from '../route/index';
import '../css/app.css';
const render = Component => {
    ReactDom.render(
        <AppContainer >
            <Component  store={store}/>
        </AppContainer>,
        document.getElementById('root')
    );
}

render(RouteIndex);

if (module.hot) {
    module.hot.accept('../route/index', () => { render(RouteIndex) });
}
