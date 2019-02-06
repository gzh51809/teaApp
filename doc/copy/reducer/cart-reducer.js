import {
    CLEAR_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATA_QTY
} from '../actions/cartAction';

let defaultState={goodslist:[],step:0}
let reducer=function(state=defaultState,action){
    let {type,payload}=action;

    switch(type){
        // 删除购物车商品
        case REMOVE_FROM_CART:
        return {
            ...state,goodslist:state.goodslist.filter(item=>item.id!==payload.id)
        }

        //添加商品到购物车
        case ADD_TO_CART:
        return {
            ...state,
            goodslist:[
                ...state.goodslist,
                payload]
        }

        //更新商品数量
        case UPDATA_QTY:
        return {
            ...state,
            goodslist:state.goodslist.map(item=>{
                if(item.id===payload.id){
                    item.qty=payload.qty
                }
                return item;
            })
        }

        // 清空购物车
        case CLEAR_CART:
        return {
            ...state,
            goodslist:[]
        }

        default:
        return state;
    }
}

export default reducer;