import React,{Component} from 'react';
import {Carousel} from 'antd';
import Swiper from '../../../component/swiper';

class CarouseHome extends Component{
    constructor(){
        super();
        this.state={
            recommend:[
                {
                    text:'趣味拼团',
                    imgurl:'banner/banner1.jpg',
                    goodsId:57
                },
                {
                    text:'商品1',
                    imgurl:'banner/banner2.jpg',
                    goodsId:54
                },{
                    text:'商品2',
                    imgurl:'banner/banner3.jpg',
                    goodsId:53
                }
            ]
        }
    }

    render(){
        return (
            <div className='carouse'>
                {/* <Carousel autoplay>
                    {
                        this.state.recommend.map(item=>{
                            return (
                                <div key={item.text}>
                                    <img src={item.imgurl} alt=''/>
                                </div>
                            )
                        })
                    }
                </Carousel> */}
                <Swiper type={'img'} direction={false} data={this.state.recommend}/>
            </div>
        )
    }
}

export default CarouseHome
