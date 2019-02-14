import React,{Component} from 'react';
import FooterBar from '../../component/footerBar';
import TitleBar from '../../component/titleBar';
import MineTop from './component/mineTop';
import MyIcon from './component/myIcon';
import MyItem from './component/myItem';
import axios from'axios';
import { Spin } from 'antd';
import './mine.scss';

class Mine extends Component{
    constructor(){
        super();
        this.state={
            myLogo:[
                {
                    text:'账户余额',
                    imgIcon:require('./image/user_coll.png'),
                    path:''
                },{
                    text:'金币',
                    imgIcon:require('./image/user_feet.png'),
                    path:''
                }
            ],
            myItem:[
                {
                    text:'待付款',
                    imgIcon:'icon-daifukuan',
                    type:'icon',
                    path:''
                },{
                    text:'待发货',
                    imgIcon:'icon-daifahuo',
                    type:'icon',
                    path:''
                },{
                    text:'待收货',
                    imgIcon:'icon-daishouhuo',
                    type:'icon',
                    path:''
                },{
                    text:'待评价',
                    imgIcon:'icon-31daipingjia',
                    type:'icon',
                    path:''
                },{
                    text:'退款/售后',
                    imgIcon:'icon-tuikuan',
                    type:'icon',
                    path:''
                }
            ],
            myIcon:[
                {
                    text:'我的收藏',
                    imgIcon:'icon-shoucang',
                    path:''
                },{
                    text:'浏览足迹',
                    imgIcon:'icon-zuji1',
                    path:''
                },{
                    text:'电子茶礼',
                    imgIcon:'icon-liwu',
                    path:''
                },{
                    text:'我的客服',
                    imgIcon:'icon-kefu1',
                    path:''
                },{
                    text:'门店加盟',
                    imgIcon:'icon-biaojidian1',
                    path:''
                },{
                    text:'设置',
                    imgIcon:'icon-weibiaoti2fuzhi16',
                    path:''
                }
            ],
            currentStatus:'登录',
            needLogin:true,
            loading:true
        }
        this.handleClick=this.handleClick.bind(this);
        this.goto=this.goto.bind(this);
    }

    async componentDidMount(){
        let storage=JSON.parse(localStorage.getItem("tokenData"));

        if(!storage){
            this.setState({
                loading:false
            })
        }else{
            let token=storage.token;
            let res=await axios.get(`${axios.axiosurl}/token`,{
                headers:{
                    token
                }
            });

            if(res.data.code===200){
                let tel=(storage.tel).slice(3,9);
                let userTel=(storage.tel).replace(tel,'****');
                  
                this.setState({
                    currentStatus:userTel,
                    needLogin:false,
                    loading:false
                })
            }else{
                this.setState({
                    currentStatus:'登录',
                    needLogin:true,
                    loading:false
                })
            }
        }
    }

    goto(){
    }
    handleClick(){
        if(this.state.needLogin){
            this.props.history.push('/login');
        }else{
            this.props.history.push('/setting');
        }
    }

    render(){
        return (
            <div className="page mine">
                <Spin spinning={this.state.loading} size='large'/>
                <div className="main">
                    <MineTop 
                    data={this.state.myLogo}
                    goto={this.goto}
                    handleClick={this.handleClick}
                    currentStatus={this.state.currentStatus}
                    />
                    <div className='myOrder'>
                        <TitleBar 
                        data={{
                            'text_l':'我的订单',
                            'text_r':'查看全部订单',
                            'type':'icon'}}
                        />
                    </div>
                    <MyItem data={this.state.myItem} goto={this.goto}/>
                    <MyIcon data={this.state.myIcon}/>
                </div>
                <FooterBar/>
            </div> 
        )
    }
}

export default Mine;
