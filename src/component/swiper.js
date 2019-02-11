import React from 'react';
import {Carousel} from 'antd';

const Swiper=({type,direction,data})=>{
    // console.log(type,direction,data);
    if(type==='img'){
        return (
            // <div>
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
            // </div>
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
