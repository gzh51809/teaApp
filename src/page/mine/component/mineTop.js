import React from 'react';
import ImgIcon from '../../../component/imgItem';

const MineTop=({data,goto,handleClick,currentStatus})=>{
    return (
        <div className='mineTop'>
            <h2>
                <i className='iconfont icon-tongzhi'></i>
            </h2>
            <ul className='myLogo'>
                {
                    data.map(item=>{
                        return (
                            <ImgIcon 
                            data={item} 
                            key={item.text} 
                            handleClick={goto}/>
                        )
                    })
                }
            </ul>
            <p className='myStatus'>
                <span onClick={handleClick}>{currentStatus}</span>
                <img src={require('../image/logo.png')} alt='' onClick={handleClick}/>
            </p>
        </div>
    )
}

export default MineTop;
