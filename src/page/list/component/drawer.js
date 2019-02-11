import React,{Component} from 'react';
import { Drawer, Button } from 'antd';
import TitleBar from '../../../component/titleBar';
import './myDrawer.scss';

class MyDrawer extends Component {
    state = { 
        visible: false,
        tabs:[
            {
                name:'品牌',
                key:1
            },{
                name:'价格',
                key:2
            },{
                name:'产地',
                key:3
            }
        ]
    };
  
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <div className='rank_r'>
          <Button type="primary" onClick={this.showDrawer}>
            筛选
            <span className="iconfont icon-shaixuan"></span>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div className='title'>
                <span onClick={this.onClose}>取消</span>
                <span><strong>筛选</strong></span>
                <span onClick={this.onClose}>确定</span>
            </div>
            <div className='detail'>
                {
                this.state.tabs.map(item=>{
                    return (
                        <TitleBar 
                        key={item.key}
                        data={{'text_l':item.name,'text_r':'全部','type':'icon'}}
                        />
                    )
                })
            }
            </div>
          </Drawer>
        </div>
      );
    }
  }

  export default MyDrawer;