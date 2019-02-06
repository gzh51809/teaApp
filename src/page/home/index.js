import React,{Component} from 'react';
import FooterBar from '../../component/footerBar';
import HeaderBar from '../../component/headerBar';
import CarouseHome from './component/carouse';
import NewsNotice from './component/newsNotice';
import Nav from './component/nav';
import Activity from './component/activity';

import './home.scss';
class Home extends Component{
    render(){
        return (
            <div className="page home">
                <HeaderBar/>
                <div className="main">
                    <CarouseHome/>
                    <NewsNotice/>
                    <Nav/>
                    <Activity/>
                </div>
                <FooterBar/>
            </div>
        )
    }
}

export default Home;