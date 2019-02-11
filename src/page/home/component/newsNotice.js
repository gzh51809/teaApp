import React,{Component} from 'react';
import Swiper from '../../../component/swiper';
import axios from'axios';

class NewsNotice extends Component{
    constructor(){
        super();
        this.state={
            news:[]
        }
    }

    componentWillMount(){
        axios.get(`${axios.axiosurl}/news/list`,{
            params:{}
        }).then(res=>{
            this.setState({
                news:res.data.data
            })
        })
    }

    render(){
        return (
            <div className='newsNotice'>
                <div className='news'></div>
                <Swiper 
                type={'text'} 
                direction={true} 
                data={this.state.news}/>
                <div className='more'>
                    <span className='iconfont icon-arrow-right-copy'></span>
                </div>
            </div>
        )
    }
}

export default NewsNotice
