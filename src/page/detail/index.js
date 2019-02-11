import React,{Component} from 'react';
import Swiper from '../../component/swiper';
// import { InputNumber} from 'antd';
import {message} from 'antd';
import TitleBar from '../../component/titleBar';
import IconBar from '../../component/iconBar';
import ImgIcon from '../../component/imgItem';
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
        this.cut = this.cut.bind(this);
        this.add = this.add.bind(this);
        this.addToCart = this.addToCart.bind(this);
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
    cut(){
        this.setState({
            goodsNum:this.state.goodsNum-1<1?1:this.state.goodsNum-1
        })
    }
    add(){
        this.setState({
            goodsNum:this.state.goodsNum*1+1>=20?20:this.state.goodsNum*1+1
        })
    }

    addToCart(fn){
            if (localStorage.getItem("tokenData")) {
              let storage = JSON.parse(localStorage.getItem("tokenData"));
              let token = storage.token;
    
              axios.get(`${axios.axiosurl}/token`, {
                headers: {
                  token
                }
              }).then(res => {
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

                      axios.post(`${axios.axiosurl}/order/addgood`, postData).then(res => {
                        if(res.data.code===1){
                            if(fn){
                                this.props.history.push('/cart');
                            }else{
                                success();
                            }
                        }else{
                            warning();
                        }
                      });
                }
              })   
          }else{
              this.props.history.push('/login');
          }
    }

    render(){
        return (
            <div className="page detail">
                <div className="main">
                    <div className='header'>
                        <span className='iconfont icon-jiantouarrowhead7' onClick={()=>{this.handleClick('/home')}}></span>
                        <span>商品详情</span>
                    </div>
                    <Swiper type={'img'} direction={false} data={this.state.imgs}/>
                    <div className='detail'>
                        <p className='name'>{this.state.goodsDetail.name}</p>
                        <p>产地：{this.state.goodsDetail.place}</p>
                        <p>参数：{this.state.goodsDetail.gram}</p>
                        <p className='price'>¥{this.state.goodsDetail.price}</p>
                        <div className='number'>
                            <span>数量</span>
                            {/* <InputNumber 
                                min={1} 
                                max={5} 
                                // size="small" 
                                // value={item.qty} 
                                // onChange={(qty)=>{changeQty(item.id,qty)}}
                            />  */}
                            <input className='btn' type='button' value='-' onClick={this.cut}/>
                            <input 
                            className='num' 
                            type='text'
                            value={this.state.goodsNum}
                            onChange={this.handleChange}
                            ref="keyword"
                            />
                            <input className='btn' type='button' value='+' onClick={this.add}/>
                        </div>
                        <p>送至：广东省 广州市 天河区</p>
                        <p>运费：包邮</p>
                    </div>
                    <TitleBar data={{'text_l':'商品评价 0人评价','text_r':'好评100%','type':'icon'}}/>
                    <IconBar data={{'type':'img','text_l':this.state.goodsDetail.brands,'imgIcon':this.state.goodsDetail.logo}}/>
                    <div className='imgDes'>
                        <img src={this.state.goodsDetail.image} alt=''/>
                    </div>
                </div>
                <div className='myfooter'>
                    <ul>
                        {
                            this.state.icon.map((item,idx)=>{
                                return (
                                    <ImgIcon data={item} key={idx} handleClick={this.handleClick}/>
                                )
                            })
                        }
                    </ul>
                    <span onClick={()=>{this.addToCart()}}>加入购物车</span>
                    <span onClick={()=>{this.addToCart('fn')}}>立即支付</span>
                </div>
            </div>
        )
    }
}

export default Detail;
