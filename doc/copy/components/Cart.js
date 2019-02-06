import React,{Component} from 'react';
import {ReactReduxContext,connect} from 'react-redux';
import {List,Skeleton,Avatar,InputNumber,Button} from 'antd';
import cartAction from '../actions/cartAction';

class Cart extends Component{
    // handleRemove(id){
    //     this.props.dispatch({
    //         type:'REMOVE_FROM_CART',
    //         payload:{id}
    //     })
    // }

    // static contextType=ReactReduxContext;
    // 实际开发很少使用，一般用connect

    render(){
        let {remove,changeQty,clear,goodslist} = this.props;
        // console.log('mycart',goodslist);
        return (
            <div className="cart">
                <List
                    className="demo-loadmore-list"
                    loading={false}
                    itemLayout="horizontal"
                    dataSource={goodslist}
                    renderItem={item => (
                    <List.Item actions={[<a onClick={remove.bind(this,item.id)}>删除</a>]}>
                        <Skeleton avatar title={false} loading={false} active>
                        <List.Item.Meta
                            avatar={<Avatar src={item.imgurl} />}
                            title={item.name}
                            description={<div className="info">
                                <p className="price">现价：<span>{item.price}</span></p>
                                <InputNumber 
                                    min={1} 
                                    max={5} 
                                    size="small" 
                                    value={item.qty}
                                    onChange={
                                        (qty)=>{
                                            changeQty(item.id,qty);
                                        }
                                    }
                                /> 
                            </div>}
                        />
                        </Skeleton>
                    </List.Item>
                    )}
                />
                <Button type="danger" onClick={clear}>清空购物车</Button>
            </div>
        )
    }
}

// connect([mapStateToProps],[mapDispatchToProps])
// 默认映射dispath到props：如果connect不写参数，只有dispatch，没有state
// Cart=connect(state=>{
//     return {
//         goodslist:state.cart.goodslist
//     }
// })(Cart);

const mapStateToProps=state=>{
    return {
        goodslist:state.cart.goodslist
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        remove(id){
            dispatch(cartAction.remove(id))
        },
        changeQty(id,qty){
            dispatch(cartAction.changeQty(id,qty))
        },
        clear(){
            dispatch(cartAction.clear())
        }
    }
}

Cart=connect(mapStateToProps,mapDispatchToProps)(Cart);

export default Cart;