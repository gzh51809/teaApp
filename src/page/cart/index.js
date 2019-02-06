import React,{Component} from 'react';
import FooterBar from '../../component/footerBar';

class Cart extends Component{
    render(){
        return (
            <div className="page cart">
                <div className="main">
                    <h1>Cart</h1>
                </div>
                <FooterBar/>
            </div>
            
        )
    }
}

export default Cart;
