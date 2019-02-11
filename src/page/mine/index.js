import React,{Component} from 'react';
import FooterBar from '../../component/footerBar';
import ImgIcon from '../../component/imgItem';
import TitleBar from '../../component/titleBar';
import IconBar from '../../component/iconBar';
import axios from'axios';
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
            needLogin:true
        }
        this.handleClick=this.handleClick.bind(this);
        this.goto=this.goto.bind(this);
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
                  let tel=(storage.tel).slice(3,9);
                  let userTel=(storage.tel).replace(tel,'****');
                    
                  this.setState({
                      currentStatus:userTel,
                      needLogin:false
                  })

                  }else{
                    this.setState({
                        currentStatus:'登录',
                        needLogin:true
                    })
                  }
                })
            }else{
              this.noLogin=true;
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
                <div className="main">
                    <div className='mineTop'>
                        <h2>
                            <i className='iconfont icon-tongzhi'></i>
                        </h2>
                        <ul className='myLogo'>
                            {
                                this.state.myLogo.map(item=>{
                                    return (
                                        <ImgIcon data={item} key={item.text} handleClick={this.goto}/>
                                    )
                                })
                            }
                        </ul>
                        <p className='myStatus'>
                            <span onClick={this.handleClick}>{this.state.currentStatus}</span>
                            <img src={require('./image/logo.png')} alt='' onClick={this.handleClick}/>
                        </p>
                    </div>
                    <div className='myOrder'>
                        <TitleBar data={{'text_l':'我的订单','text_r':'查看全部订单','type':'icon'}}/>
                    </div>
                    <ul className='myItem'>
                        {
                            this.state.myItem.map(item=>{
                                return(
                                    <ImgIcon data={item} key={item.text} handleClick={this.goto}/>
                                )
                            })
                        }
                    </ul>
                    <div className='myIcon'>
                        {
                            this.state.myIcon.map(item=>{
                                return(
                                    <IconBar data={item} key={item.text}/>
                                )
                            })
                        }
                    </div>
                </div>
                <FooterBar/>
            </div>
            
        )
    }
}

export default Mine;
