import React,{Component} from 'react';
import GoodsItem from '../../../component/goodsItem';
import {withRouter} from 'react-router-dom';
import axios from'axios';

class goodsHot extends Component{
    constructor(){
        super();
        this.state={
            goods:[],
            currentPage:1
        }
        this.handleClick=this.handleClick.bind(this);
    }
    componentWillMount(){
        axios.get(`${axios.axiosurl}/list/hot`,{
            params:{
                page:this.state.currentPage,
                qty:6
            }
        }).then(res=>{
            this.setState({
                goods:res.data.data
            })
        })
    }
    handleClick(goodsId,path){
        if(path!==undefined){
            this.props.history.push('/list/1')
        }else{
            this.props.history.push('/detail/'+goodsId)
        }
    }

    render(){
        return (
            <div className='goodsHot'>
                <div className='title'>
                    <span>爆款商品</span>
                    <p className='more' onClick={this.handleClick.bind(this,'/list/1')}>
                        <span>更多&nbsp;</span>
                        <span className='iconfont icon-arrow-right-copy'></span>
                    </p>
                </div>
                <GoodsItem data={this.state.goods} handleClick={this.handleClick}/>
            </div>
        )
    }
}

goodsHot = withRouter(goodsHot);
export default goodsHot
