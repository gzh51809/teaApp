import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './page/home';
import Sweep from './page/home/component/sweep';
import Notice from './page/home/component/notice';
import Category from './page/category';
import Find from './page/find';
import Cart from './page/cart';
import Detail from './page/detail';
import Mine from './page/mine';
import Setting from './page/mine/component/setting';
import Login from './page/mine/component/login';
import List from './page/list';
import './sass/App.scss';
import 'antd/dist/antd.css';
import './iconfont/iconfont.css';
import axios from 'axios';
const axiosurl='http://39.108.252.230:4005';
axios.axiosurl=axiosurl;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/sweep' component={Sweep}/>
            <Route path='/notice' component={Notice}/>
            <Route path='/category' component={Category}/>
            <Route path='/find' component={Find}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/detail/:goodsid' component={Detail}/>
            <Route path='/mine' component={Mine}/>
            <Route path='/setting' component={Setting}/>
            <Route path='/login' component={Login}/>
            <Route path='/list/:cid' component={List}/>
            <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default App;
