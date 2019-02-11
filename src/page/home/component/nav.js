import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class Nav extends Component{
    constructor(){
        super();
        this.state={
            icon:[
                {
                    name:'普洱茶',
                    icon:require('../image/navIcon1.png'),
                    cid:2
                },{
                    name:'红茶',
                    icon:require('../image/navIcon2.png'),
                    cid:3
                },{
                    name:'绿茶',
                    icon:require('../image/navIcon3.png'),
                    cid:1
                },{
                    name:'白茶',
                    icon:require('../image/navIcon4.png'),
                    cid:4
                },{
                    name:'茶具',
                    icon:require('../image/navIcon5.png'),
                    cid:9
                }
            ]
        }
    }

    handleClick(cid){
        // console.log(this);
        let {history}=this.props;
        history.push('/list/'+cid);
    }
    render(){
        return (
            <div className='nav'>
                <ul>
                    {
                        this.state.icon.map(item=>{
                            return (
                                <li key={item.name} onClick={this.handleClick.bind(this,item.cid)}>
                                    <img src={item.icon} alt=''/>
                                    <span>{item.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

Nav=withRouter(Nav);
export default Nav
