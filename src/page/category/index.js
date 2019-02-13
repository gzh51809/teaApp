import React,{Component} from 'react';
import HeaderBar from '../../component/headerBar';
import FooterBar from '../../component/footerBar';
import CategoryTab from './component/categoryTab';
import CategoryCon from './component/categoryCon';
import TitleBar from '../../component/titleBar';
import {withRouter} from 'react-router-dom';
import axios from'axios';
import { Spin } from 'antd';
import './category.scss';

class Category extends Component{
    constructor(){
        super();
        this.state={
            category:[],
            currentTab:0,
            specialData:[
                {
                    "imgIcon": require("./image/choose1.png"),
                    "text": "新品抢购"
                },
                {
                    "imgIcon": require("./image/choose2.png"),
                    "text": "众筹商品"
                },
                {
                    "imgIcon": require("./image/choose3.png"),
                    "text": "限时特惠"
                },
                {
                    "imgIcon": require("./image/choose4.png"),
                    "text": "超级拼团"
                },
                {
                    "imgIcon": require("./image/choose5.png"),
                    "text": "好茶微拍"
                }
            ],
            renderData:[],
            sendData:[],
            loading:true
        };
        this.changeTab=this.changeTab.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    componentDidMount(){
        axios.get(`${axios.axiosurl}/category/`).then(res=>{
            this.setState({
                category:res.data,
                loading:false
            })
        })

        this.setState({
            renderData:this.state.specialData
        })
    }

    changeTab(cid){
        if(cid===0){
            this.setState({
                currentTab:cid,
                renderData:this.state.specialData
            })
        }else{
            let data=this.state.category[cid-1].data;
            this.setState({
                loading:true
            },()=>{
                this.setState({
                    currentTab:cid,
                    sendData:[
                        {'name':data[2].data,
                        'text_l':'热门品牌',
                        'text_r':'更多品牌',
                        'type':'icon',
                        'class':'brands'
                        },{
                            'name':data[0].data,
                            'text_l':'产地',
                            'text_r':'',
                            'type':'',
                            'class':'place'
                        },{
                            'name':data[1].data,
                            'text_l':'价位',
                            'text_r':'',
                            'type':'',
                            'class':'price'
                        }
                    ],
                    renderData:data[2].data,
                    loading:false
                })
            })
        }
    }

    handleClick(){
        let {history}=this.props;
        if(this.state.currentTab===0){
            history.push('/list/1');
        }else{
            history.push('/list/'+this.state.currentTab);
        }
    }

    render(){
        return (
            <div className="page category">
                <HeaderBar/>
                <Spin spinning={this.state.loading} size='large'/>
                <div className="main">
                    <div className='categoryTab'>
                        <h2 
                        className={this.state.currentTab===0?'activeTab':''} 
                        onClick={this.changeTab.bind(this,0)}
                        >一键选茶
                        </h2>
                        <CategoryTab 
                        data={this.state.category} 
                        currentTab={this.state.currentTab} 
                        changeTab={this.changeTab}/>
                    </div>

                    <div className='categoryCon clearfix'>
                        <div className={this.state.currentTab===0?'special':'disappear'}>
                            <CategoryCon 
                            data={this.state.renderData} 
                            type='icon' 
                            handleClick={this.handleClick}/>
                        </div>
                        {
                            this.state.sendData.map(item=>{
                                return(
                                    <div 
                                    key={item.text_l} 
                                    className={this.state.currentTab===0?'disappear':item.class}>
                                        <p className='blankBar'></p>
                                        <TitleBar 
                                        data={{'text_l':item.text_l,
                                        'text_r':item.text_r,
                                        'type':item.type}}
                                        handleClick={this.handleClick}
                                        />
                                        <CategoryCon 
                                        data={item.name} 
                                        type={item.type}
                                        handleClick={this.handleClick}/>
                                    </div>
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

Category = withRouter(Category);
export default Category;
