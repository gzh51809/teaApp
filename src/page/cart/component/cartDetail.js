import React from 'react';
import IconBar from '../../../component/iconBar';
import CartItem from './cartItem';

const CartDetail =({item,handleChange,changeNumber})=>{
    return (
        <div className='cartItem'>
            <div className='cartBrand'>
                <input type='checkbox'/>
                <IconBar 
                data={{
                    'type':'img',
                    'text_l':item.brands,
                    'imgIcon':item.data[0].logo
                }}/>
            </div>
            <ul className='cartDetail'>
                {item.data.map((item,idx)=>{
                    return (
                        <CartItem
                        item={item}
                        handleChange={handleChange} 
                        changeNumber={changeNumber}
                        key={idx}
                        />
                    )
                })}
                
            </ul>
        </div>
    )
}

export default CartDetail;