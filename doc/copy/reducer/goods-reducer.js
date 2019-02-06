let defaultState = {
    name:'test',
    price:1000
}
let reducer = function(state=defaultState,action){
    let {type,payload}=action;

    switch(type){
        case 'CHANG_PRICE':
            return {
                ...state,
                price:payload.price
            }

        default:
            return state;
    }
}

export default reducer;
