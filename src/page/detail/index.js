import React,{Component} from 'react';
import Swiper from '../../component/swiper';
import {message} from 'antd';
import TitleBar from '../../component/titleBar';
import IconBar from '../../component/iconBar';
import GoodsDetail from './component/goodsDetail';
import GoodsFooter from './component/goodsFooter';
import axios from'axios';
import './detail.scss';

message.config({
    top: 50,
    duration: 1
  });

const success=()=>{
    message.success('好茶链：添加成功');
};
const warning=()=>{
    message.warning('好茶链：网络出了点小问题');
}

class Detail extends Component{
    constructor(){
        super();
        this.state={
            goodsDetail:{},
            icon:[
                {
                    'text':'在线客服',
                    'imgIcon':'icon-kefu1',
                    'type':'icon',
                    'path':''
                },{
                    'text':'收藏',
                    'imgIcon':'icon-iconfontzhizuobiaozhun023116',
                    'type':'icon',
                    'path':''
                },{
                    'text':'购物车',
                    'imgIcon':'icon-gouwuche1',
                    'type':'icon',
                    'path':'/cart'
                }
            ],
            imgs:[],
            goodsNum:1
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
    }

    componentWillMount(){
        let {match}=this.props;

        axios.get(`${axios.axiosurl}/detail`,{
            params:{
                goodsid:match.params.goodsid
            }
        }).then(res=>{
            this.setState({
                goodsDetail:res.data.data,
                imgs:res.data.data.imgs
            })
        })
    }
    handleChange(e){
        this.setState({
            goodsNum:e.target.value
        })
    }
    handleClick(path){
        if(path){
            this.props.history.push(path);
        }
    }
    changeNumber(type){
        if(type==='cut'){
            this.setState({
                goodsNum:this.state.goodsNum-1<1?1:this.state.goodsNum-1
            })
        }else if(type==='add'){
            this.setState({
                goodsNum:this.state.goodsNum*1+1>=20?20:this.state.goodsNum*1+1
            })
        }
    }

    async addToCart(fn){
        let storage=JSON.parse(localStorage.getItem("tokenData"));
        if(!storage){
            this.props.history.push('/login');
        }else{
            let token = storage.token;
            let res =await axios.get(`${axios.axiosurl}/token`, {
                headers: {
                  token
                }
            });

            if(res.data.code===200){
                let{price,name,logo,brands,goodsId,imgs}=this.state.goodsDetail;
                let postData = {
                    goodsid:goodsId,
                    name:name,
                    imgs:imgs[0],
                    price:price,
                    number:this.state.goodsNum,
                    brands:brands,
                    tel:storage.tel,
                    logo:logo
                  };

                let cartRes=await axios.post(`${axios.axiosurl}/order/addgood`, postData);
                if(cartRes.data.code===1){
                    if(fn){
                        this.props.history.push('/cart');
                    }else{
                        success();
                    }
                }else{
                    warning();
                }
            }else{
                this.props.history.push('/login');
            }
        }
    }

    render(){
        return (
            <div className="page detail">
                <div className="main">
                    <div className='header'>
                        <span 
                        className='iconfont icon-jiantouarrowhead7' 
                        onClick={()=>{this.handleClick('/home')}}>
                        </span>
                        <span>商品详情</span>
                    </div>
                    <Swiper type={'img'} direction={false} data={this.state.imgs}/>
                    <GoodsDetail 
                    data={this.state.goodsDetail}
                    goodsNum={this.state.goodsNum}
                    handleChange={this.handleChange}
                    changeNumber={this.changeNumber}
                    />
                    <TitleBar data={{
                        'text_l':'商品评价 0人评价',
                        'text_r':'好评100%',
                        'type':'icon'}}/>
                    <IconBar data={{
                        'type':'img',
                        'text_l':this.state.goodsDetail.brands,
                        'imgIcon':this.state.goodsDetail.logo}}/>
                    <div className='imgDes'>
                        <img src={this.state.goodsDetail.image} alt=''/>
                    </div>
                </div>
                <GoodsFooter 
                data={this.state.icon} 
                handleClick={this.handleClick} 
                addToCart={this.addToCart}/>
            </div>
        )
    }
}

export default Detail;
