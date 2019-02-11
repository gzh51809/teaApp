import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from'axios';

class HeaderBar extends Component{
    constructor(){
        super();
        this.state = {
            keyword:'',
            timer:null
        }

        this.handleChange = this.handleChange.bind(this);
    }
    goto(path){
        this.props.history.push(path);
    }
    
    handleChange(e){
        this.setState({
            keyword:e.target.value
        },()=>{
            let thisTimer=this.state.timer;
            clearTimeout(thisTimer);
            if (!this.state.keyword) return;
            thisTimer = setTimeout(() => {
                axios.get(`${axios.axiosurl}/list/like`,{
                    params:{
                        keyword:this.state.keyword,
                    }
                }).then(res=>{
                    let {search}=this.props;
                    search(res.data.data);
                })
            },1000)
        })
    }

    render(){
        return (
            <div className='headerBar' id='search'>
                <ul>
                    <li onClick={this.goto.bind(this,'/home')}>
                        <span className='iconfont icon-jiantouarrowhead7'></span>
                    </li>
                    <li className='search' >
                        <input 
                        type='search' 
                        placeholder='好茶链' 
                        className='searchButton' 
                        value={this.state.keyword}
                        onChange={this.handleChange}
                        ref="keyword"
                        autoFocus/>
                    </li>
                    <li>
                        <span className='iconfont icon-fenlei1'></span>
                    </li>
                </ul>
            </div>
        )
    }
}

HeaderBar = withRouter(HeaderBar);
export default HeaderBar;