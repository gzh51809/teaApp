import React from 'react';
import '../sass/goodsItem.scss';

const GoodsItem=({data,handleClick})=>{
    return(
        <div>
            <ul className='goodsItem clearfix'>
                {
                    data.map(item=>{
                        return (
                            <li key={item.goodsId} onClick={()=>{handleClick(item.goodsId)}}>
                                <img src={(item.imgs).split('&')[0]} alt=''/>
                                <div className='text'>
                                    <p className='name'>{item.name}</p>
                                    <p className='price'>¥{item.price}</p>
                                    <span className='mark'>
                                        <i className='iconfont icon-gouwuche'></i>
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default GoodsItem
