import React,{Component} from 'react';
import {Carousel} from 'antd';
import Swiper from '../../../component/swiper';

class Activity extends Component{
    constructor(){
        super();
        this.state={
            text:[
                {
                    text:'广盛昌 陈皮白茶第1期开奖公告：'
                },{
                    text:'一等奖 679962'
                },{
                    text:'二等奖 896157,688282'
                },{
                    text:'三等奖 775145,676728,729354'
                },{
                    text:'四等奖 963398,617847,919656'
                }
            ]
        }
    }
    render(){
        return (
            <div className='activity'>
                <div className='actImg'>
                    <img src={require('../../../image/ad.png')} alt=''/>
                </div>
                <div className='actName'>
                    <div className='notice'></div>
                    {/* <Carousel autoplay dots={false}>
                        {
                            this.state.text.map((item,idx)=>{
                                return (
                                    <p key={idx}>
                                        {item.text}
                                    </p>
                                )
                            })
                        }
                    </Carousel> */}
                    <Swiper type={'text'} direction={false} data={this.state.text}/>
                </div>
            </div>
        )
    }
}

export default Activity
