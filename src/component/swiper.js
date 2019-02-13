import React from 'react';
import {Carousel} from 'antd';

const Swiper=({type,direction,data})=>{
    if(type==='img'){
        return (
            <Carousel autoplay vertical={direction} dots={true}>
                {
                    data.map((item,idx)=>{
                        return (
                            <div key={idx}>
                                <img src={item} alt=''/>
                            </div>
                        )
                    })
                }
            </Carousel>
        )
    }else{
        return (
            <Carousel autoplay vertical={direction} dots={false}>
                {
                    data.map((item,idx)=>{
                        return (
                            <p key={idx}>
                                {item.title}
                            </p>
                        )
                    })
                }
            </Carousel>
        )
    } 
}

export default Swiper
