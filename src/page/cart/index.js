import React,{Component} from 'react';
import FooterBar from '../../component/footerBar';
import IconBar from '../../component/iconBar';
import axios from'axios';
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
            goodsEdit:true
        }
        this.handleClick=this.handleClick.bind(this);
        this.changeEdit=this.changeEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cut = this.cut.bind(this);
        this.add = this.add.bind(this);
    }

    handleChange(e){
        this.setState({
            goodsNum:e.target.value
        })
    }
    handleClick(){
        this.props.history.push('/home');
    }
    cut(){
        // console.log('look',goodsId);
        this.setState({
            goodsNum:this.state.goodsNum-1<1?1:this.state.goodsNum-1
        })
    }
    add(){
        this.setState({
            goodsNum:this.state.goodsNum*1+1>=20?20:this.state.goodsNum*1+1
        })
    }
    changeEdit(){
        this.setState({
            goodsEdit:!this.state.goodsEdit
        })
    }
    componentDidMount(){
        if(localStorage.getItem("tokenData")){
            let storage=JSON.parse(localStorage.getItem("tokenData"));
            let token=storage.token;
              axios.get(`${axios.axiosurl}/token`,{
                headers:{
                  token
                }
              }).then(res=>{
                if(res.data.code===200){
                    this.setState({
                        currentUser:storage.tel
                    })

                    axios.post(`${axios.axiosurl}/order`,{'tel':storage.tel})
                    .then(res => {
                        let data = res.data;
                        this.setState({
                            cartList:data.data
                        },()=>{
                            // console.log(this.state.cartList);
                        })
                    })

                  }else{
                    this.props.history.push('/login');
                  }
                })
            }else{
                this.props.history.push('/login');
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
                                    <div className='cartItem' key={idx}>
                                        <div className='cartBrand'>
                                            <input type='checkbox'/>
                                            <IconBar 
                                            data={{'type':'img',
                                            'text_l':item.brands,
                                            'imgIcon':item.data[0].logo}}/>
                                        </div>
                                        <ul className='cartDetail'>
                                            {item.data.map((item,idx)=>{
                                                return (
                                                    <li key={idx}>
                                                        <input type='checkbox'/>
                                                        <img src={item.imgs} alt=''/>
                                                        <div>
                                                            <p>{item.name}</p>
                                                            <p className='price'>¥{item.price}</p>
                                                            <div className='number'>
                                                                <input 
                                                                className='btn' 
                                                                type='button'
                                                                value='-' 
                                                                onClick={()=>{
                                                                    
                                                                    this.cut();
                                                                    console.log(this.refs)
                                                                }}/>
                                                                <input
                                                                ref={item.name} 
                                                                className='num' 
                                                                type='text'
                                                                value={item.number}
                                                                onChange={this.handleChange}
                                                                />
                                                                <input 
                                                                className='btn' 
                                                                type='button' 
                                                                value='+' 
                                                                onClick={this.add}/>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                            
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='cartFooter'>
                    <div className={this.state.goodsEdit?'':'disappear'}>
                        <label><input type='checkbox'/>全选</label>
                        <p>合计：<span>¥{this.state.totalPrice}</span></p>
                        <button>去结算({this.state.totalNum})</button>
                    </div>
                    <div className={this.state.goodsEdit?'disappear':''}>
                        <label><input type='checkbox'/>全选</label>
                        <button>删除</button>
                    </div>
                </div>
                <FooterBar/>
            </div>
        )
    }
}

export default Cart;
