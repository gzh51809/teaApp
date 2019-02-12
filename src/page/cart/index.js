import React,{Component} from 'react';
import FooterBar from '../../component/footerBar';
import CartDetail from './component/cartDetail';
import CartFooter from './component/cartFooter';
import axios from'axios';
import { Modal, message } from 'antd';
import './cart.scss';
const confirm = Modal.confirm;

message.config({
    top: 50,
    duration: 1
});
const success=()=>{
    message.success('好茶链：删除成功');
};
const warning=()=>{
    message.warning('好茶链：网络有点小问题');
}

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
            token:''
        }
        this.handleClick=this.handleClick.bind(this);
        this.changeEdit=this.changeEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeNumber=this.changeNumber.bind(this);
        this.selecteItem=this.selecteItem.bind(this);
        this.removeItem=this.removeItem.bind(this);
        this.noGoods=this.noGoods.bind(this);
        this.updateAxios=this.updateAxios.bind(this);
    }
    noGoods(){
        if(this.state.cartList.length===0){
            return true
        }else{
            return false
        }
    }
    handleChange(e){
        this.setState({
            goodsNum:e.target.value
        })
    }
    // 跳转其他页面
    handleClick(){
        this.props.history.push('/home');
    }
    // 删除商品，更新状态
    updateAxios(){
        axios.post(`${axios.axiosurl}/order`,{'tel':this.state.currentUser})
        .then(res => {
            let data = res.data;
            this.setState({
                cartList:data.data
            });
        });
    }
    // 删除确认框
    showConfirm(sendAxios){
        confirm({
            title: '您确定要删除所选商品吗?',
            content: '',
            onOk() {
                sendAxios();
            },
            onCancel() {
                
            },
        });
    }
    // 删除
    async removeItem(){
        let delectEle=[];
        let stateData=this.state.cartList;
        stateData.map(item=>{
            item.data.map(item=>{
                if(item.selected){
                    delectEle.push(item.goodsId);
                }
                return item
            })
            return item
        })

        let sendAxios=async function(data){
            let resMsg;
            for(var i=0;i<delectEle.length;i++){
                let res=await axios.post(`${axios.axiosurl}/order/delete`,{'goodsid':delectEle[i],'tel':data});
                if(res.data.code===1){
                    resMsg=1
                }else{
                    resMsg=0
                }
            }
            if(resMsg===1){
                success();
                this.updateAxios();
            }else{
                warning();
            }
        }

        this.showConfirm(sendAxios.bind(this,this.state.currentUser));
    }
    // 计算总价
    countTotal(){
        let total=0;
        let number=0;
        this.state.cartList.map(item=>{
            for(var i=0;i<item.data.length;i++){
                if(item.data[i].selected){
                    total+=item.data[i].number*item.data[i].price;
                    number+=item.data[i].number
                }
            }
            return item
        })
        // console.log(total)
        this.setState({
            totalPrice:total,
            totalNum:number
        })
    }
    // 选择商品
    selecteItem(goodsId,status){
        if(typeof goodsId == 'number'){
            this.setState({
                cartList:this.state.cartList.map(item=>{
                    item.data.map(item=>{
                        if(item.goodsId===goodsId){
                            item.selected = !item.selected;
                        }
                        return item
                    })
                    return item;
                })
            }) 
        }else{
            if(goodsId==='checkAll'){
                this.setState({
                    cartList:this.state.cartList.map(item=>{
                        item.data.map(item=>{
                            item.selected=!status;
                            return item
                        })
                        return item
                    })
                })
            }else{
                this.setState({
                    cartList:this.state.cartList.map(item=>{
                        if(item.brands===goodsId){
                            item.data.map(item=>{
                                item.selected = !status;
                                return item
                            })
                        }
                        return item;
                    })
                })
            }
        }

        this.countTotal();
    }
    async sendQty(goodsId,tel,number){
        let postData = {
            goodsid: goodsId,
            tel:tel,
            number: number
        };
        let res=await axios.post(`${axios.axiosurl}/order/updategood`,postData);
        if(res.data.code===1){
            // this.updateAxios();
        }else{
            // warning();
        }
    }
    // 更新数量
    async changeNumber(type,goodsId,number){
        if(type==='cut'){
            if(number<=1){
                return
            }else{
                number=number-1;
                this.sendQty(goodsId,this.state.currentUser,number);
            }
        }else if(type==='add'){
            if(number>=20){
                return
            }else{
                number=number+1;
                this.sendQty(goodsId,this.state.currentUser,number);
            }
        }

        this.countTotal();
        this.setState({
            cartList:this.state.cartList.map(item=>{
                item.data.map(item=>{
                    if(item.goodsId===goodsId){
                        item.number=number
                    }
                    return item
                })
                return item
            })
        })
    }
    // 切换编辑/删除面板
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
                },()=>{
                    this.updateAxios();
                })
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
                        <span 
                        className='fr' 
                        onClick={this.changeEdit}>{this.state.goodsEdit?'编辑':'完成'}
                        </span>
                    </h2>
                    <div className='cartList'>
                        <p className={this.noGoods()?'show':'hidden'}>
                            <img src={require('./image/cart-empty.png')} alt=''/>
                            购物车空空如<br/>快去挑选你喜欢的商品吧！
                            <button onClick={this.handleClick}>去逛逛</button>
                        </p>
                        {
                            this.state.cartList.map((item,idx)=>{
                                return (
                                    <CartDetail 
                                    item={item}
                                    handleChange={this.handleChange}
                                    changeNumber={this.changeNumber}
                                    key={idx}
                                    idx={idx}
                                    selecteItem={this.selecteItem}
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
                selecteItem={this.selecteItem}
                data={this.state.cartList}
                removeItem={this.removeItem}
                noGoods={this.noGoods}
                />
                <FooterBar/>
            </div>
        )
    }
}

export default Cart;
