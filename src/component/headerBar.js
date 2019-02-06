import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class HeaderBar extends Component{
    goto(path){
        this.props.history.push(path);
    }

    render(){
        return (
            <div className='headerBar'>
                <ul>
                    <li onClick={this.goto.bind(this,'/sweep')}>
                        <span className='iconfont icon-saoyisao'></span>
                        <span>扫一扫</span>
                    </li>
                    <li className='search' onClick={this.goto.bind(this,'/list')}>
                        <input type='text' placeholder='搜索商品' className='searchButton'/>
                    </li>
                    <li onClick={this.goto.bind(this,'/notice')}>
                        <span className='iconfont icon-tongzhi'></span>
                        <span>消息</span>
                    </li>
                </ul>
            </div>
        )
    }
}

HeaderBar = withRouter(HeaderBar);
export default HeaderBar;