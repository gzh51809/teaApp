import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class Topic extends Component{
    constructor(){
        super();
        this.state={
            goods:[
                {
                    name:'素研',
                    goodsid:20,
                    imgurl:'goodstopic/goodsTop3.jpg'
                },{
                    name:'素心',
                    goodsid:21,
                    imgurl:'goodstopic/goodsTop4.jpg'
                },{
                    name:'2016年贡眉',
                    goodsid:55,
                    imgurl:'goodstopic/goodsTop1.jpg'
                },{
                    name:'福建白茶',
                    goodsid:56,
                    imgurl:'goodstopic/goodsTop2.jpg'
                }
            ]
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(goodsid){
        this.props.history.push('/detail/'+goodsid)
    }

    render(){
        return (
            <div className='topic'>
                <div className='title'>
                    白茶季 清甜礼
                </div>
                <div className='imgAd'>
                    <img 
                    src='goodstopic/slideImg.jpg' 
                    alt='' 
                    onClick={this.handleClick.bind(this,55)}/>
                </div>
                <div className='goodsItemHome'>
                    <div className='goods_l'>
                        <img 
                        src='goodstopic/goodsTopAd.jpg' 
                        alt='' 
                        onClick={this.handleClick.bind(this,56)}/>
                    </div>
                    <ul className='goods_r'>
                        {
                            this.state.goods.map(item=>{
                                return (
                                    <li 
                                    key={item.goodsid} 
                                    onClick={this.handleClick.bind(this,item.goodsid)}>
                                        <img src={item.imgurl} alt=''/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

Topic = withRouter(Topic);
export default Topic
