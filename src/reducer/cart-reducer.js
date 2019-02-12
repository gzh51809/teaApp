import {
    CLEAR_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATA_QTY
} from '../actions/cartAction';

let defaultState={cartList:[],currentUser:'',totalNum:0,totalPrice:0,}
let reducer=function(state=defaultState,action){
    let {type,payload}=action;

    switch(type){
        // 删除购物车商品
        case REMOVE_FROM_CART:
        return {
            ...state,
            cartList:state.cartList.map(item=>{
                item.data.filter(item=>item.goodsId!==payload.goodsId)
                return item
            })
        }

        //添加商品到购物车
        case ADD_TO_CART:
        return {
            ...state,
            // cartList:[
            //     ...state.cartList,
            //     payload]
            cartList:state.cartList.map(item=>{
                if(item.brands===payload.brands){
                    item.data.push(payload)
                }
            })
        }

        //更新商品数量
        case UPDATA_QTY:
        return {
            ...state,
            cartList:state.cartList.map(item=>{
                if(item.goodsId===payload.goodsId){
                    item.number=payload.number
                }
                return item;
            })
        }

        // 清空购物车
        case CLEAR_CART:
        return {
            ...state,
            cartList:[]
        }

        default:
        return state;
    }
}

export default reducer;