import React from 'react';
import IconBar from '../../../component/iconBar';
import CartItem from './cartItem';

const CartDetail =({idx,item,handleChange,changeNumber,selecteItem})=>{
    return (
        <div className='cartItem'>
            <div className='cartBrand'>
                <input 
                type='checkbox'
                checked={item.data.every(item=>item.selected)}
                onChange={()=>{
                    selecteItem(item.brands,item.data.every(item=>item.selected))
                }}
                />
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
                        selecteItem={selecteItem}
                        />
                    )
                })}
                
            </ul>
        </div>
    )
}

export default CartDetail;