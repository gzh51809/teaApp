import React from 'react';
import ImgIcon from '../../../component/imgItem';

const MyItem=({data,goto})=>{
    return (
        <ul className='myItem'>
            {
                data.map(item=>{
                    return(
                        <ImgIcon 
                        data={item} 
                        key={item.text} 
                        handleClick={goto}/>
                    )
                })
            }
        </ul>
    )
}

export default MyItem;