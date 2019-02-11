import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from'axios';
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
    search(){
        clearTimeout(this.timer);
        if (!this.keyword) return;
        this.timer = setTimeout(() => {
            axios.get(`${axios.axiosurl}/list/like`,{
                params:{
                    keyword:this.state.keyword,
                    rule:this.state.current
                }
            }).then(res=>{
                console.log(res.data)
                // this.setState({
                //     goods:res.data.data
                // })
            })
        },1000)
    }
    handleChange(e){
        console.log('123')
        this.setState({
            keyword:e.target.value
        },()=>{
            // clearTimeout(this.timer);
            // if (!this.keyword) return;
            // this.timer = setTimeout(() => {
            //     axios.get(`${axios.axiosurl}/list/like`,{
            //         params:{
            //             keyword:this.state.keyword,
            //             rule:this.state.current
            //         }
            //     }).then(res=>{
            //         console.log(res.data)
            //         // this.setState({
            //         //     goods:res.data.data
            //         // })
            //     })
            // },1000)
        })

        clearTimeout(this.timer);
        if (!this.keyword) return;
        this.timer = setTimeout(() => {
            axios.get(`${axios.axiosurl}/list/like`,{
                params:{
                    keyword:e.target.value
                }
            }).then(res=>{
                console.log(res.data)
                // this.setState({
                //     goods:res.data.data
                // })
            })
        },1000)
    }
    render(){
        return (
            <div className='headerBar'>
                <ul>
                    {/* home */}
                    <li onClick={this.goto.bind(this,'/sweep')}>
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
                        onBlur={this.serach}
                        ref="keyword"
                        />
                    </li>
                    <li className='myHome' onClick={this.goto.bind(this,'/notice')}>
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