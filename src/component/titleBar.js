import React from 'react';
import '../sass/titleBar.scss';

const TitleBar=(props)=>{
    let propsData=props;
    let {data}=props;
    return (
        <h2 className='titleBar'>
            <span>{data.text_l}</span>
            <span className='more' onClick={()=>{
                if(propsData.handleClick){
                    propsData.handleClick();
                }else{
                    return
                }
            }}>
                {data.text_r}&nbsp;
                <i className={data.type==='icon'?'iconfont icon-arrow-right-copy':''}></i>
            </span>
        </h2>
    )
}

export default TitleBar