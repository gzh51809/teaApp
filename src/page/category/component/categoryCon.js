import React from 'react';
import ImgIcon from '../../../component/imgItem';

const CategoryCon=({data,type='icon',handleClick})=>{
    return(
        <ul className='clearfix'>
            {
                data.map((item,idx)=>{
                    if(type==='icon'){
                        return (
                            <ImgIcon data={item} key={idx} handleClick={handleClick}/>
                        )
                    }else{
                        return(
                            <li key={idx} onClick={()=>{handleClick()}}>{item}</li>
                        )
                    }
                })
            }
        </ul>
    )
}
export default CategoryCon
