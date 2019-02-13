import React,{Component} from 'react';
import Swiper from '../../component/swiper';
import ImgItem from '../../component/imgItem';
import FooterBar from '../../component/footerBar';
import { Spin } from 'antd';
import './find.scss';

class Find extends Component{
    constructor(){
        super();
        this.state={
            recommend:[
                require('./image/searchBanner1.jpg'),
                require('./image/searchBanner2.jpg'),
                require('./image/searchBanner3.jpg')
            ],
            loading:true,
            business:[
                {
                    text:'专属定制',
                    imgIcon:require('./image/searchIconSmall1.png'),
                    path:'' 
                },{
                    text:'城市空间',
                    imgIcon:require('./image/searchIconSmall2.png'),
                    path:'' 
                },{
                    text:'茶旅游学',
                    imgIcon:require('./image/searchIconSmall3.png'),
                    path:'' 
                },{
                    text:'茶来茶往',
                    imgIcon:require('./image/searchIconSmall4.png'),
                    path:'' 
                },{
                    text:'好茶直播',
                    imgIcon:require('./image/searchIconSmall5.png'),
                    path:'' 
                },{
                    text:'好茶游戏',
                    imgIcon:require('./image/searchIconSmall6.png'),
                    path:'' 
                }
            ],
            mainMenu:[
                {
                    text:'商城',
                    imgIcon:require('./image/searchIcon1.png'),
                    path:'' 
                },{
                    text:'社区',
                    imgIcon:require('./image/searchIcon2.png'),
                    path:'' 
                }
            ]
        }
        this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount(){
        this.setState({
            loading:false
        })
    }
    handleClick(){}
    
    render(){
        return (
            <div className="page find">
                <Spin spinning={this.state.loading} size='large'/>
                <div className="main">
                    <h2 className='header'>
                        <span>发现</span>
                        <span className='iconfont icon-kefu1'></span>
                    </h2>
                    <Swiper 
                    type={'img'} 
                    direction={false} 
                    data={this.state.recommend}
                    />
                    <ul className='mainMenu'>
                        {this.state.mainMenu.map(item=>{
                            return (
                                <ImgItem 
                                data={item} 
                                key={item.text} 
                                handleClick={this.handleClick}/>
                            )
                        })}
                    </ul>
                    <ul className='business'>
                        {this.state.business.map(item=>{
                            return (
                                <ImgItem 
                                data={item} 
                                key={item.text} 
                                handleClick={this.handleClick}/>
                            )
                        })}
                    </ul>
                    <p>—— • 更多精彩，等你发现 • ——</p>
                </div>
                <FooterBar/>
            </div>  
        )
    }
}

export default Find;
