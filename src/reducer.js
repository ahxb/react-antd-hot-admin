import { createStore, combineReducers } from 'redux';

function calc(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state += 1;

        case 'MINUS':
            return state -= 1;

        default:
            return state;
    }
}


export default function(init){

    //Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
    //reducer reducer的名字
    const combinedReducers = combineReducers({reducer: calc});
    //redux 调试工具combinedReducers
    //createStore接受 Reducer 作为参数，生成一个新的 Store。以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。
    const store = createStore(combinedReducers, init, window.devToolsExtension ? window.devToolsExtension() : f => f);
    return store;
};