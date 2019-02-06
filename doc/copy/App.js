import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Home from './components/Home.js';
import List from './components/List.js';
import Mine from './components/Mine.js';
import Goods from './components/Goods';
import Cart from './components/Cart';

// 引入ant-design（全部引入）
import { Menu, Icon, Badge } from 'antd';
import 'antd/dist/antd.css';

// 利用babel-plugin-import实现按需引入
// import { Menu, Icon } from 'antd';
import './sass/page.scss';

// import store from './store';

import {connect} from 'react-redux';
// import * as all from 'react-redux';
// console.log(all);

// <Route/>组件的职责：根据浏览器url匹配Route中的path属性，渲染相应的component
// 编程式导航
//     * 获取history对象
//     * 通过<Route/>渲染组件
//     * 通过withRouter高阶组件
//     * Context

const axiosUrl='http://localhost:4005';
axios.axiosUrl=axiosUrl;

class App extends Component {
    constructor(){
      super();
      this.state={
        menu:[
          {
              text:'首页',
              path:'/home',
              name:'Home',
              icon:'home'
          },{
              text:'列表',
              path:'/list',
              name:'List',
              icon:'bars'
          },{
              text:'购物车',
              path:'/cart',
              name:'Cart',
              icon:'shopping-cart'
          },{
              text:'我的',
              path:'/mine',
              name:'Mine',
              icon:'user'
          }
        ],
        current:'/home'
      }

      this.handleChange=this.handleChange.bind(this);
    }

    // 新版本react-redux：设置静态属性，用户获取Provider提供的store数据
    // static contextType=ReactReduxContext;
    // 此方法能将整个store放入组件的props中，但实际开发很少使用，一般用connect

    // 点击高亮
    handleChange({item,key,keyPath}){
      // 实现路由跳转：
      // 1、如何获取路由路径；2、如何获取history对象
      this.setState({
        current:key
      });

      // console.log(this.props.history);
      // history.push();
      this.props.history.push(key);
    }

    componentDidMount(){
      // 利用生命周期函数保持当前路由高亮
      // 获取当前路由(hash,history)
      let hash=window.location.hash;
      hash=hash.split('/')[1];
      this.setState({
        current:'/'+hash
      })
      
    }

    // 在组件中获取redux中的state
    // static contextTypes = {
    //   store:PropTypes.object
    // }

    render() {
        let goodslistCount=this.props.goodslist;
        let total=0;
        for(var i=0;i<goodslistCount.length;i++){
          total+=goodslistCount[i].qty;
        }
        // console.log('app',this);
        return (
            <div>
                <h1>路由演示</h1>
                {/*<ReactReduxContext.Consumer>
                                    {
                                      context=>{
                                        console.log(context);
                                      }
                                    }
                                </ReactReduxContext.Consumer>*/}
                <button onClick={()=>{
                  this.props.addCart({
                    id:33,
                    name:'xxx',
                    price:123,
                    qty:3
                  })
                }}>加入购物车</button>
                {/*<Link to='/home'>Home</Link>
                                <Link to='/list'>List</Link>
                                <Link to='/mine'>Mine</Link>*/}
                {/*<NavLink to='/home' 
                                activeClassName='current' 
                                activeStyle={{color:'#58bc58'}}>home</NavLink>
                                <NavLink to='/list' 
                                activeClassName='current' 
                                activeStyle={{color:'#58bc58'}}>list</NavLink>
                                <NavLink to='/mine' 
                                activeClassName='current' 
                                activeStyle={{color:'#58bc58'}}>mine</NavLink>*/}
                <Menu 
                mode='horizontal'
                selectedKeys={[this.state.current]}
                onClick={this.handleChange}>
                  {
                    this.state.menu.map(menu=>{
                      return (
                        <Menu.Item key={menu.path}>
                          <Badge count={menu.name==='Cart'?total:null}>
                            <Icon type={menu.icon}/>{menu.text}
                            </Badge>
                        </Menu.Item>
                      )
                    })
                  }
                </Menu>

                {/*组件渲染*/}
                <Switch>
                  <Route path='/home' component={Home}/>
                  <Route path='/list' component={List}/>
                  <Route path='/cart' component={Cart}/>
                  <Route path='/mine' component={Mine}/>
                  {/*动态路由*/}
                  <Route path='/goods/:id' component={Goods}/>
                  <Redirect from='/' to='/home'/>
                </Switch>
            </div>
        );
    }
}

// 通过context获取history对象
// App.contextTypes={
//   router:PropTypes.object
// }

let mapStateToProps=(state)=>{
  return {
    // 把goodslist属性映射到App的props中
    goodslist:state.cart.goodslist,
    price:state.goods.price
  }
}

let mapDispatchToProps=(dispatch)=>{
  return {
    addCart:(goods)=>{
      dispatch({
        type:'ADD_TO_CART',
        payload:goods
      })
    }
  }
}

App=connect(mapStateToProps,mapDispatchToProps)(App);

// 利用withRouter高阶组件包装App组件，高阶组件与context实现共存=》将高阶组件置于context之后
App=withRouter(App);


export default App;