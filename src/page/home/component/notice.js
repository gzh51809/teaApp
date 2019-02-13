import React,{Component} from 'react';
import { Spin } from 'antd';

class Notice extends Component{
    render(){
        return (
            <div className="page notice">
                <div className="main">
                    <h1>Notice</h1>
                    <Spin />
                </div>
            </div>
        )
    }
}

export default Notice;