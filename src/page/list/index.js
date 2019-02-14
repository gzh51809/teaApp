import React,{Component} from 'react';
import GoodsItem from '../../component/goodsItem';
import HeaderBar from './component/search';
import MyDrawer from './component/drawer';
import axios from'axios';
import { Spin } from 'antd';
import './list.scss';

class List extends Component{
    constructor(){
        super();
        this.state={
            goods:[],
            rank:[
                {
                    name:'综合',
                    rule:'_id',
                    key:'1'
                },{
                    name:'销量',
                    rule:'hot',
                    key:'2'
                },{
                    name:'价格',
                    rule:'price',
                    key:'3'
                }
            ],
            current:'_id',
            currentCid:1,
            currentPage:1,
            total:0,
            loading:true,
            loadingMore:false,
            noMoreGoods:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.search=this.search.bind(this);
    }

    componentWillMount(){
        let {match}=this.props;

        this.setState({
            currentCid:match.params.cid
        },()=>{
            axios.get(`${axios.axiosurl}/list/goods/${this.state.currentCid}`,{
                params:{
                    page:1,
                    qty:6
                }
            }).then(res=>{
                this.setState({
                    goods:res.data.data,
                    total:Math.ceil(res.data.total/6),
                    loading:false
                })
            })
        })
    }
    componentDidMount() {
        if (this.contentNode) {
            this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
        }
    }
    componentWillUnmount() {
        if (this.contentNode) {
            this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
        }
    }
    changeRank(key){
        this.setState({
            current:key,
            currentPage:1,
            loading:true
        },()=>{
            axios.get(`${axios.axiosurl}/list/goods/${this.state.currentCid}`,{
                params:{
                    page:1,
                    qty:6,
                    rule:this.state.current
                }
            }).then(res=>{
                this.setState({
                    goods:res.data.data,
                    loading:false
                })
            })
        })
    }
    onScrollHandle(event) {
        const clientHeight = event.target.clientHeight
        const scrollHeight = event.target.scrollHeight
        const scrollTop = event.target.scrollTop
        const isBottom = (clientHeight + scrollTop === scrollHeight)
        
        if(isBottom){
            if(this.state.currentPage+1>this.state.total){
                this.setState({
                    noMoreGoods:true
                })
                return
            }else{
                this.setState({
                    currentPage:this.state.currentPage+1,
                    loadingMore:true
                },()=>{
                    axios.get(`${axios.axiosurl}/list/goods/${this.state.currentCid}`,{
                        params:{
                            page:this.state.currentPage,
                            qty:6,
                            rule:this.state.current
                        }
                    }).then(res=>{
                        let goodsData=this.state.goods;
                        for(var i=0;i<res.data.data.length;i++){
                            goodsData.push(res.data.data[i]);
                        }
                        this.setState({
                            goods:goodsData,
                            loadingMore:false
                        })
                    })
                })
            }
        }
    }
    handleClick(goodsid){
        this.props.history.push('/detail/'+goodsid)
    }

    search(data){
        this.setState({
            goods:data
        })
    }
    render(){
        return (
            <div className="page list">
                <Spin spinning={this.state.loading} size='large'/>
                <div 
                className="main"
                ref={ node => this.contentNode = node }
                style={{overflowY: "scroll"}}
                > 
                    <HeaderBar search={this.search}/>
                    <div className='rank'>
                        <ul>
                            {
                                this.state.rank.map(item=>{
                                    return (
                                        <li 
                                        key={item.key} 
                                        className={this.state.current===item.rule?'active':''}
                                        onClick={this.changeRank.bind(this,item.rule)}
                                        >{item.name}</li>
                                    )
                                })
                            }
                        </ul>
                        <MyDrawer/>
                    </div>
                    <Spin spinning={this.state.loadingMore} size='large'/>
                    <GoodsItem data={this.state.goods} handleClick={this.handleClick}/>
                    <p 
                    style={{
                        display:this.state.noMoreGoods?'block':'none',
                        width:'100%',
                        height:'50px',
                        lineHeight:'50px',
                        textAlign:'center',
                        color:'#999'}}>
                    —— • 到底了 • ——
                    </p>
                </div>
            </div>
        )
    }
}

export default List;
