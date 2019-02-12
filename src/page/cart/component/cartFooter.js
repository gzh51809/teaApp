import React from 'react';

const CartFooter=({data,goodsEdit,totalPrice,totalNum,selecteItem,removeItem})=>{
    return (
        <div className='cartFooter'>
            <div className={goodsEdit?'':'disappear'}>
                <label>
                    <input 
                    type='checkbox'
                    checked={
                        data.every(item=>{
                            return item.data.every(item=>item.selected)
                        })
                    }
                    onChange={()=>{
                        selecteItem('checkAll',data.every(item=>item.data.every(item=>item.selected)))
                    }}
                    />
                    全选
                </label>
                <p>合计：<span>¥{totalPrice}</span></p>
                <button>去结算({totalNum})</button>
            </div>
            <div className={goodsEdit?'disappear':''}>
                <label>
                    <input 
                    type='checkbox'
                    checked={
                        data.every(item=>{
                            return item.data.every(item=>item.selected)
                        })
                    }
                    onChange={()=>{
                        selecteItem('checkAll',data.every(item=>item.data.every(item=>item.selected)))
                    }}
                    />
                    全选
                </label>
                <button onClick={()=>removeItem()}>删除</button>
            </div>
        </div>
    )
}

export default CartFooter;