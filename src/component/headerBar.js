import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../sass/headerBar.scss';

class HeaderBar extends Component{
    constructor(){
        super();
        this.state = {
            keyword:''
        }

        this.handleChange = this.handleChange.bind(this);
    }
    goto(path){
        this.props.history.push(path);
    }
    handleChange(e){
        this.setState({
            keyword:e.target.value
        })
    }
    render(){
        return (
            <div className='headerBar'>
                <ul>
                    {/* home */}
                    <li onClick={this.goto.bind(this,'/home')}>
                        <span className='iconfont icon-saoyisao'></span>
                        <span className='myHome'>扫一扫</span>
                    </li>
                    <li className='search' onClick={this.goto.bind(this,'/list/1')}>
                        <input 
                        type='search' 
                        placeholder='搜索商品'
                        className='searchButton'
                        value={this.state.keyword}
                        onChange={this.handleChange}
                        ref="keyword"
                        />
                    </li>
                    <li className='myHome' onClick={this.goto.bind(this,'/home')}>
                        <span className='iconfont icon-tongzhi'></span>
                        <span>消息</span>
                    </li>
                    <li className='myCategory' onClick={this.goto.bind(this,'/list/1')}>
                        <span>搜索</span>
                    </li>
                </ul>
            </div>
        )
    }
}

HeaderBar = withRouter(HeaderBar);
export default HeaderBar;