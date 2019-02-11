import React, {Component} from 'react';
import TitleBar from '../../../component/titleBar';
import {withRouter} from 'react-router-dom';
import './setting.scss';

class Setting extends Component{
    constructor(){
        super();
        this.state={
            setTabs:[
                {
                    'text_l':'消息推送设置',
                    'text_r':'',
                    'type':'icon'
                },{
                    'text_l':'清除本地缓存',
                    'text_r':'17.00MB',
                    'type':''
                },{
                    'text_l':'关于我们',
                    'text_r':'V1.26.0107',
                    'type':'icon'
                }
            ]
        }

        this.handleClick=this.handleClick.bind(this);
        this.exit=this.exit.bind(this);
    }

    handleClick(){
        this.props.history.push('/mine');
    }

    exit(){
        localStorage.clear();
        this.props.history.push('/mine');
    }

    render(){
        return(
            <div className="page setting">
                <div className="main">
                    <div className='header'>
                        <span className='iconfont icon-jiantouarrowhead7' onClick={this.handleClick}></span>
                        <span>设置</span>
                    </div>
                    <div className='detail'>
                        {
                            this.state.setTabs.map(item=>{
                                return (
                                    <TitleBar data={item} key={item.text_l}/>
                                )
                            })
                        }
                    </div>
                    <div className='btn'>
                        <button onClick={this.exit}>退出登录</button>
                    </div>
                </div>
            </div>
        )
    }
}

Setting = withRouter(Setting);
export default Setting;