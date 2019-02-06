import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './page/home';
import Sweep from './page/home/sweep';
import Notice from './page/home/notice';
import Category from './page/category';
import Find from './page/find';
import Cart from './page/cart';
import Mine from './page/mine';
import List from './page/list';

import './App.scss';
import 'antd/dist/antd.css';
import './iconfont/iconfont.css';
import axios from'axios';
const axiosurl='http://localhost:4005';
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
            <Route path='/mine' component={Mine}/>
            <Route path='/list' component={List}/>
            <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default App;
