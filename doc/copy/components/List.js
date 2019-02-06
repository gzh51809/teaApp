import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {Tabs, List, Avatar, Skeleton} from 'antd';
import {connect} from 'react-redux';
import {add,changeQty} from '../actions/cartAction';
import axios from 'axios';

class GoodsList extends Component{
    constructor(){
        super();
        this.state={
            tabs:[
                {
                    text:'电脑',
                    path:'/computer'
                },{
                    text:'手机',
                    path:'/tel'
                },{
                    text:'平板',
                    path:'/ipad'
                }
            ],
            current:'/computer',
            goodslist:[],
            loading:false
        }

        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(path){
        // 这里的this指向类组件List，List是通过Route来渲染的，因此可以通过this.props获取history对象，this.props下的match中的path和url指向的List
        
        let {history,match}=this.props;
        this.setState({
            current:path
        });

        history.push(match.url+path);
    }

    componentWillMount(){
        axios.get('https://www.nanshig.com/mobile/index.php',{
            params:{
                act:'goods',
                op:'goods_list',
                keyword:'',
                page:10,
                curpage:1
            }
        }).then(res=>{
            this.setState({
                goodslist:res.data.datas.goods_list
            })
        })
    }

    componentDidMount(){
        let hash=window.location.hash;
        hash=hash.replace('#'+this.props.match.url,'');

        this.setState({
            current:hash
        })
    }

    // add2cart(goods){
    //     goods = {
    //         id:goods.goods_id,
    //         name:goods.goods_name,
    //         price:goods.goods_price,
    //         imgurl:goods.goods_image_url,
    //         qty:1
    //     }
        
    //     this.props.dispatch({
    //         type:'ADD_TO_CART',
    //         payload:goods
    //     })
    // }

    render(){
        let {current,tabs}=this.state;
        let {match}=this.props;
        // console.log('cartlist',this.props);
        return (
            <div>
                <h3>List列表</h3>
                <List
                    className="demo-loadmore-list"
                    loading={this.state.loading}
                    itemLayout="horizontal"
                    dataSource={this.state.goodslist}
                    renderItem={item => (
                      <List.Item actions={[<a onClick={()=>{
                        // 判断商品是否已经存在
                        let currentGoods=this.props.cartlist.filter(goods=>{
                            return goods.id===item.goods_id
                        })
                        if(currentGoods.length>0){
                            let {id,qty}=currentGoods[0];
                            this.props.changeQty(id,qty+1);
                        }else{
                            let goods={
                                id:item.goods_id,
                                name:item.goods_name,
                                price:item.goods_price,
                                imgurl:item.goods_image_url,
                                qty:1
                            }

                            this.props.add2cart(goods)
                        }
                      }}>加入购物车</a>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                          <List.Item.Meta
                            avatar={<Avatar src={item.goods_image_url} />}
                            title={item.goods_name}
                            description={
                                <div className="info">
                                   <p className="price">原价：<del>{item.goods_marketprice}</del></p>
                                    <p className="price">现价：<span>{item.goods_price}</span></p>
                                    <p>分数：{item.evaluation_good_star}</p>
                                </div>
                            }
                          />
                        </Skeleton>
                      </List.Item>
                    )}
                  />
                <Tabs
                onChange={this.handleChange}
                activeKey={current}>
                    {
                       tabs.map(tab=>{
                        return (
                            <Tabs.TabPane tab={tab.text} key={tab.path}
                            >
                                 <Switch>
                                    <Route path={match.path+'/computer'} render={()=><div>电脑</div>}/>
                                    <Route path={match.path+'/tel'} render={()=><div>手机</div>}/>
                                    <Route path={match.path+'/ipad'} render={()=><div>平板</div>}/>
                                    <Redirect from={match.path} to={match.path+'/computer'} />
                                </Switch> 
                            </Tabs.TabPane>
                        )
                       }) 
                    }
                </Tabs>
                {/*List中的嵌套路由*/}
                
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        cartlist:state.cart.goodslist
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        add2cart(goods){
            dispatch(add(goods))
        },
        changeQty(id,qty){
            dispatch(changeQty(id,qty))
        }
    }
}
GoodsList=connect(mapStateToProps,mapDispatchToProps)(GoodsList);

export default GoodsList