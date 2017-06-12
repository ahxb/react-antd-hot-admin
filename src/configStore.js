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
    const combinedReducers = combineReducers({app: calc});
    const store = createStore(combinedReducers, init, window.devToolsExtension ? window.devToolsExtension() : f => f);
    return store;
};