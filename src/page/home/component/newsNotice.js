import React,{Component} from 'react';
import Swiper from '../../../component/swiper';

class NewsNotice extends Component{
    constructor(){
        super();
        this.state={
            news:[
                {
                    text:'趣味拼团',
                    _id:57
                },
                {
                    text:'商品1',
                    _id:54
                },{
                    text:'商品2',
                    _id:53
                }
            ]
        }
    }

    render(){
        return (
            <div className='newsNotice'>
                <div className='news'></div>
                {/* <Carousel autoplay vertical dots={false}>
                    {
                        this.state.news.map(item=>{
                            return (
                                <div key={item.text}>
                                    {item.text}
                                </div>
                            )
                        })
                    }
                </Carousel> */}
                <Swiper type={'text'} direction={true} data={this.state.news}/>
                <div className='more'>
                    <span className='iconfont icon-arrow-right-copy'></span>
                </div>
            </div>
        )
    }
}

export default NewsNotice
