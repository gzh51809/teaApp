import React from 'react';
import {render} from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';
// store.subscribe(()=>{
//    let data=store.getState();
// })

// store.dispatch({
//     type:'ADD_TO_CART',
//     payload:{
//         id:1,
//         name:'iphonex',
//         price:9998,
//         qty:1
//     }
// })

// store.dispatch({
//     type:'CHANG_PRICE',
//     payload:{
//         price:12345
//     }
// })

// // 引入redux
// import {createStore} from 'redux';
// // import * as redux from 'redux';
// // console.log(redux);

// // 定义reducer
// let defaultState={goodslist:[],step:0}
// let reducer=function(state=defaultState,action){
//     // action的格式：{type:xxx,payload}
//     // 事先设定的修改逻辑
//     switch(action.type){
//         case 'REMOVE_FROM_CART':
//         return {
//             ...state,goodslist:state.goodslist.filter(item=>item.id!==action.payload.id)
//         }

//         case 'ADD_TO_CART':
//         return {
//             ...state,
//             goodslist:[
//                 ...state.goodslist,
//                 action.payload]
//         }

//         default:
//         return state;
//     }
// }

// // 生成store
// let store=createStore(reducer);
// console.log('store',store);

// // 监听修改
// store.subscribe(function(){
//     // 当state有修改时，自动执行这个回调函数
//     let data = store.getState();
//     console.log('subscribe:',data);
// })

// // 获取最新状态
// // let data=store.getState();
// // console.log('inital',data);

// // 修改state：唯一修改方式dispatch
// store.dispatch({type:'ADD_TO_CART',payload:{id:1,name:'iphone',price:9988,qty:1}});
// store.dispatch({type:'ADD_TO_CART',payload:{id:2,name:'mate20',price:9988,qty:1}});
// store.dispatch({type:'REMOVE_FROM_CART',payload:{id:2}});


render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
