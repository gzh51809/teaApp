import React from 'react';
import IconBar from '../../../component/iconBar';

const MyIcon =({data})=>{
    return (
        <div className='myIcon'>
            {
                data.map(item=>{
                    return(
                        <IconBar data={item} key={item.text}/>
                    )
                })
            }
        </div>
    )
}

export default MyIcon;