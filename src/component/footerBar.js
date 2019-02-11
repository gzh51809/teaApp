import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Menu,Badge} from 'antd';

class FooterBar extends Component {
    constructor() {
        super();
        this.state = {
            menu: [{
                    text: '首页',
                    path: '/home',
                    name: 'Home',
                    icon: 'icon-chayin'
                },
                {
                    text: '分类',
                    path: '/category',
                    name: 'Category',
                    icon: 'icon-fenlei'
                },
                {
                    text: '发现',
                    path: '/find',
                    name: 'Find',
                    icon: 'icon-iconset0456'
                },
                {
                    text: '购物车',
                    path: '/cart',
                    name: 'Cart',
                    icon: 'icon-gouwuche1'
                },
                {
                    text: '我的',
                    path: '/mine',
                    name: 'Mine',
                    icon: 'icon-wode1'
                }
            ],
            current: '/home'
        }

        this.handleChange=this.handleChange.bind(this);
    }

    handleChange({
        item,
        key,
        keyPath
    }) {
        this.setState({
            current: key
        });
        this.props.history.push(key);
    }

    componentDidMount() {
        let hash = window.location.hash;
        hash = hash.split('/')[1];
        this.setState({
            current: '/' + hash
        })
    }

    render() {
        return ( 
            <div className='footer'>
                <Menu 
                mode='horizontal'
                selectedKeys={[this.state.current]}
                onClick={this.handleChange}>
                  {
                    this.state.menu.map(menu=>{
                      return (
                        <Menu.Item key={menu.path}>
                          <Badge count={menu.name==='Cart'?0:null}>
                            <span className={'iconfont '+menu.icon}></span>
                            <span>{menu.text}</span>
                            </Badge>
                        </Menu.Item>
                      )
                    })
                  }
                </Menu>
            </div>
        )
    }
}

FooterBar = withRouter(FooterBar);
export default FooterBar;