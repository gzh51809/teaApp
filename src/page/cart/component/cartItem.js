import React from 'react';

const CartItem = ({item,handleChange,changeNumber,selecteItem})=>{
    return (
        <li>
            <input 
            type='checkbox' 
            checked={item.selected}
            onChange={()=>{
                selecteItem(item.goodsId)
            }}
            />
            <img src={item.imgs} alt=''/>
            <div>
                <p>{item.name}</p>
                <p className='price'>¥{item.price}</p>
                <div className='number'>
                    <input 
                    className='btn' 
                    type='button'
                    value='-' 
                    onClick={()=>{
                        changeNumber('cut',item.goodsId,item.number);
                    }}/>
                    <input
                    className='num' 
                    type='text'
                    value={item.number}
                    onChange={handleChange}
                    />
                    <input 
                    className='btn' 
                    type='button' 
                    value='+' 
                    onClick={()=>{
                        changeNumber('add',item.goodsId,item.number);
                    }}/>
                </div>
            </div>
        </li>
    )
}

export default CartItem;