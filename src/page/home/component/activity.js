import React,{Component} from 'react';
import Swiper from '../../../component/swiper';

class Activity extends Component{
    constructor(){
        super();
        this.state={
            text:[
                {
                    title:'广盛昌 陈皮白茶第1期开奖公告'
                },{
                    title:'一等奖 679962'
                },{
                    title:'二等奖 896157,688282'
                },{
                    title:'三等奖 775145,676728,729354'
                },{
                    title:'四等奖 963398,617847,919656'
                }
            ]
        }
    }
    render(){
        return (
            <div className='activity'>
                <div className='actImg'>
                    <img src={require('../image/ad.png')} alt=''/>
                </div>
                <div className='actName'>
                    <div className='notice'></div>
                    <Swiper 
                    type={'text'} 
                    direction={false} 
                    data={this.state.text}/>
                </div>
                <div className='moreAct'>
                    趣味拼团
                    <span>更多拼团在这里</span>
                </div>
                <ul className='detail'>
                    <li>
                        <img src={require('../image/adBuy.jpeg')} alt=''/>
                        <div className='text'>
                            <span></span>
                            <p className='name'>广盛昌 2018年小城故事陈皮白茶(第2期)</p>
                            <p className='price'>¥99.00</p>
                            <p className='hot'>已有18人参团</p>
                        </div>
                    </li> 
                </ul>
            </div>
        )
    }
}

export default Activity
