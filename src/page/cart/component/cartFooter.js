import React from 'react';

const CartFooter=({goodsEdit,totalPrice,totalNum})=>{
    return (
        <div className='cartFooter'>
            <div className={goodsEdit?'':'disappear'}>
                <label><input type='checkbox'/>全选</label>
                <p>合计：<span>¥{totalPrice}</span></p>
                <button>去结算({totalNum})</button>
            </div>
            <div className={goodsEdit?'disappear':''}>
                <label><input type='checkbox'/>全选</label>
                <button>删除</button>
            </div>
        </div>
    )
}

export default CartFooter;