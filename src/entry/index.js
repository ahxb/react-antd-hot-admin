import 'react-hot-loader/patch';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import 'antd/dist/antd.css';
//路由
import RootContainer from '../route/index';
import '../css/app.css';
const render = Component => {
    ReactDom.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
}

render(RootContainer);

if (module.hot) {
    module.hot.accept('../route/index', () => { render(RootContainer) });
}