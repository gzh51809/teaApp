import React,{Component} from 'react';

class Nav extends Component{
    constructor(){
        super();
        this.state={
            icon:[
                {
                    name:'普洱茶',
                    icon:require('../../../image/icon/navIcon1.png'),
                    cid:57
                },{
                    name:'红茶',
                    icon:require('../../../image/icon/navIcon2.png'),
                    cid:57
                },{
                    name:'绿茶',
                    icon:require('../../../image/icon/navIcon3.png'),
                    cid:57
                },{
                    name:'白茶',
                    icon:require('../../../image/icon/navIcon4.png'),
                    cid:57
                },{
                    name:'茶具',
                    icon:require('../../../image/icon/navIcon5.png'),
                    cid:57
                }
            ]
        }
    }

    render(){
        return (
            <div className='nav'>
                <ul>
                    {
                        this.state.icon.map(item=>{
                            return (
                                <li key={item.name}>
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

export default Nav
