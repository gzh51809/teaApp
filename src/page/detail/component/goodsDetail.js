import React from 'react';

const GoodsDetail=({data,goodsNum,handleChange,changeNumber})=>{
    return (
        <div className='detail'>
            <p className='name'>{data.name}</p>
            <p>产地：{data.place}</p>
            <p>参数：{data.gram}</p>
            <p className='price'>¥{data.price}</p>
            <div className='number'>
                <span>数量</span>
                <input className='btn' type='button' value='-' onClick={()=>changeNumber('cut')}/>
                <input 
                className='num' 
                type='text'
                value={goodsNum}
                onChange={handleChange}
                />
                <input className='btn' type='button' value='+' onClick={()=>changeNumber('add')}/>
            </div>
            <p>送至：广东省 广州市 天河区</p>
            <p>运费：包邮</p>
        </div>
    )
}

export default GoodsDetail;