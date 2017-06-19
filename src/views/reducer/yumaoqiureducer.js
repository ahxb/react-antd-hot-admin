const initialState = {

    chickID:'',
    chickIndex:'',
    chickTrigger: false,

    numID:'',
    numVAL:'',
    numI:''

}

function commonReducer (state = initialState, action) {
    switch (action.type) {

        case 'CHICKCHANGE':
            // return Object.assign({}, state, {chickID: action.id, chickIndex: action.i,chickTrigger:!state.chickTrigger});
            return {
                ...state, chickID: action.id, chickIndex: action.i,chickTrigger:!state.chickTrigger
            }

        case 'NUMCHANGE':
            return {
                ...state,numID: action.id, numVAL: action.val,numI:action.i
            }

        default:
            return state;
    }
}

export default commonReducer;