import React,{Component} from 'react';
import Swiper from '../../../component/swiper';
// import NewSwiper from '../../../component/newSwiper';
import axios from'axios';

class NewsNotice extends Component{
    constructor(){
        super();
        this.state={
            news:[]
        }
    }

    // componentWillMount(){
    //     axios.get('http://39.108.252.230:4005/news').then(res=>{
    //         // console.log(res.data)
    //         this.setState({
    //             news:res.data.data
    //         })
    //     })
    // }
    componentWillMount(){
        axios.get(`${axios.axiosurl}/news/list`,{
            params:{}
        }).then(res=>{
            // console.log(res.data)
            this.setState({
                news:res.data.data
            })
        })
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
                {/* <NewSwiper type={'text'} direction={'vertical'} data={this.state.news}/> */}
                <div className='more'>
                    <span className='iconfont icon-arrow-right-copy'></span>
                </div>
            </div>
        )
    }
}

export default NewsNotice
