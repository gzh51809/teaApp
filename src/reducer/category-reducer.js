let defaultState = {}
let reducer = function(state=defaultState,action){
    let {type,payload}=action;

    switch(type){
        case 'CAHNGE_DATA':
            return {
                ...state,
                renderData:payload
            }

        default:
            return state;
    }
}

export default reducer;
