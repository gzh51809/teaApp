import React, {Component} from 'react';
import WrappedNormalLoginForm from './loginForm';
import './login.scss';

class Login extends Component{
    constructor(){
        super();
        this.state={
            
        }

        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.props.history.push('/mine');
    }

    render(){
        return(
            <div className="page login">
                <div className="main">
                    <div className='header'>
                        <span className='iconfont icon-jiantouarrowhead7' onClick={this.handleClick}></span>
                    </div>
                    <div className='loginForm'>
                        <div className='logo'>
                            <img src={require('../image/logpMain.png')} alt=''/>
                        </div>
                        <WrappedNormalLoginForm history={this.props.history}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;