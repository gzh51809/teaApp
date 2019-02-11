import React from 'react';
import ImgIcon from '../../../component/imgItem';

const GoodsFooter=({data,handleClick,addToCart})=>{
    return (
        <div className='myfooter'>
            <ul>
                {
                    data.map((item,idx)=>{
                        return (
                            <ImgIcon data={item} key={idx} handleClick={handleClick}/>
                        )
                    })
                }
            </ul>
            <span onClick={()=>addToCart()}>加入购物车</span>
            <span onClick={()=>addToCart('fn')}>立即支付</span>
        </div>
    )
}

export default GoodsFooter;