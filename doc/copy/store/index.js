// 引入redux
import {createStore} from 'redux';

// 引入reducer
import reducer from '../reducer';

// 生成store
let store=createStore(reducer);

// 导出store
export default store;