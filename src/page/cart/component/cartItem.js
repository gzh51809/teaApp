import React from 'react';

const CartItem = ({idx,item,handleChange,changeNumber})=>{
    return (
        <li>
            <input type='checkbox'/>
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
                        changeNumber('cut');
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
                        changeNumber('add');
                    }}/>
                </div>
            </div>
        </li>
    )
}

export default CartItem;