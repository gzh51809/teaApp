import React from 'react';
import '../sass/iconBar.scss';

const IconBar=({data})=>{
    if(data.type){
        return (
            <h2 className='iconBar'>
                <p className='more' >
                    <img src={data.imgIcon} alt=''/>
                    &nbsp;{data.text_l}
                </p>
                <i className='iconfont icon-arrow-right-copy'></i>
            </h2>
        )
    }else{
        return (
            <h2 className='iconBar'>
                <span className='more'>
                    <i className={'iconfont '+data.imgIcon}></i>
                    &nbsp;{data.text}
                </span>
                <i className='iconfont icon-arrow-right-copy'></i>
            </h2>
        )
    }
}

export default IconBar