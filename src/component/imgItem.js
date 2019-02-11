import React from 'react';
import '../sass/iconItem.scss';

const ImgItem=({data,handleClick})=>{
    if(data.type){
        return (
            <li key={data.imgIcon} className='imgIcon' onClick={()=>{handleClick(data.path)}}>
                <i className={'iconfont '+data.imgIcon}></i>
                <span>{data.text}</span>
            </li>
        )
    }else{
        return(
            <li key={data.imgIcon} className='imgIcon' onClick={()=>{handleClick()}}>
                <img src={data.imgIcon} alt=''/>
                <span>{data.text}</span>
            </li>             
        )
    }
}
export default ImgItem
