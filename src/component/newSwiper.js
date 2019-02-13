import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class NewSwiper extends Component{
    componentDidMount() {
        new Swiper('.swiper-container', {
            speed: 300,
            direction:this.props.direction,
            autoplay: {
                delay: 2000
            },
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }

    render() {
        let {type,data,handleClick}=this.props;
        if(type==='img'){
            return (
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    {
                        data.map(item=>{
                            return (
                                <div className="swiper-slide" key={item.text}>
                                    <img src={item.imgurl} alt='' onClick={()=>{handleClick(item.goodsid)}}/>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            )
        }else{
            return (
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            data.map((item,idx)=>{
                                return (
                                    <p key={idx}>
                                        {item.text}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
    }
}

export default NewSwiper