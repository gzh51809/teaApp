import React,{Component} from 'react';
import FooterBar from '../../component/footerBar';
import HeaderBar from '../../component/headerBar';
import CarouseHome from './component/carouse';
import NewsNotice from './component/newsNotice';
import Nav from './component/nav';
import Activity from './component/activity';
import Topic from './component/topic';
import GoodsHot from './component/goodsHot';
import './home.scss';

class Home extends Component{
    componentDidMount(){
        this.setState({
            loading:false
        })
    }
    render(){
        return (
            <div className="page home">
                <HeaderBar />
                <div className="main">
                    <CarouseHome/>
                    <NewsNotice/>
                    <Nav/>
                    <Activity/>
                    <Topic/>
                    <GoodsHot/>
                </div>
                <FooterBar/>
            </div>
        )
    }
}

export default Home;