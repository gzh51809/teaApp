import React,{Component} from 'react';
import GoodsItem from '../../component/goodsItem';
import HeaderBar from './component/search';
import MyDrawer from './component/drawer';
import axios from'axios';
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
            currentCid:1
        }
        this.handleClick=this.handleClick.bind(this);
        this.search=this.search.bind(this);
    }

    componentWillMount(){
        // console.log(this.props);
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
                // console.log(res.data)
                this.setState({
                    goods:res.data.data
                })
            })
        })
    }

    changeRank(key){
        this.setState({
            current:key
        },()=>{
            axios.get(`${axios.axiosurl}/list/goods/${this.state.currentCid}`,{
                params:{
                    page:1,
                    qty:6,
                    rule:this.state.current
                }
            }).then(res=>{
                // console.log(res.data)
                this.setState({
                    goods:res.data.data
                })
            })
        })
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
                <div className="main"> 
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
                        {/* <div className='rank_r'> */}
                            <MyDrawer/>
                        {/* </div> */}
                    </div>
                    <GoodsItem data={this.state.goods} handleClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default List;
