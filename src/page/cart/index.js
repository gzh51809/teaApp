import React,{Component} from 'react';
import FooterBar from '../../component/footerBar';
import CartDetail from './component/cartDetail';
import CartFooter from './component/cartFooter';
import axios from'axios';
import { Spin } from 'antd';
import './cart.scss';

class Cart extends Component{
    constructor(){
        super();
        this.state={
            currentUser:'',
            cartList:[],
            totalNum:0,
            totalPrice:0,
            goodsNum:1,
            goodsEdit:true,
            token:'',
            loading:true
        }
        this.handleClick=this.handleClick.bind(this);
        this.changeEdit=this.changeEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeNumber=this.changeNumber.bind(this);
    }

    handleChange(e){
        this.setState({
            goodsNum:e.target.value
        })
    }
    handleClick(){
        this.props.history.push('/home');
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

    changeEdit(){
        this.setState({
            goodsEdit:!this.state.goodsEdit
        })
    }
    async componentDidMount(){
        let storage=JSON.parse(localStorage.getItem("tokenData"));
        if(!storage){
            this.props.history.push('/login');
        }else{
            let token=storage.token;
            this.setState({
                token
            })
            let res=await axios.get(`${axios.axiosurl}/token`,{
                headers:{
                  token:token
                }
            });
            if(res.data.code===200){
                this.setState({
                    currentUser:storage.tel
                })
                axios.post(`${axios.axiosurl}/order`,{'tel':storage.tel})
                .then(res => {
                    let data = res.data;
                    this.setState({
                        cartList:data.data
                    });
                });
            }else{
                this.props.history.push('/login');
            }
        }
    }
    
    render(){
        return (
            <div className="page cart">
                <div className="main">
                    <h2 className='header'>
                        <span>购物车</span>
                        <span className='fr' onClick={this.changeEdit}>编辑</span>
                    </h2>
                    <div className='cartList'>
                        {
                            this.state.cartList.map((item,idx)=>{
                                return (
                                    <CartDetail 
                                    item={item}
                                    handleChange={this.handleChange}
                                    changeNumber={this.changeNumber}
                                    key={idx}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <CartFooter
                goodsEdit={this.state.goodsEdit}
                totalPrice={this.state.totalPrice}
                totalNum={this.state.totalNum}
                />
                <FooterBar/>
            </div>
        )
    }
}

export default Cart;
