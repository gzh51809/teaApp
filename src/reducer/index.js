import {combineReducers} from 'redux';

// 引入reducer
import cartReducer from './cart-reducer';
import categoryReducer from './category-reducer';

// 把多个reducer组合成一个reducer
const rootReducer=combineReducers({
    cart:cartReducer,
    category:categoryReducer
})

export default rootReducer;