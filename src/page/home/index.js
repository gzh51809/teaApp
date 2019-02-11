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
    // componentDidMount(){
    //     window.addEventListener('scroll', ()=>{
    //         console.log(this);
    //         // let scrollTop=window.document.body.scrollTop || document.documentElement.scrollTop;
    //         // console.log(scrollTop);
    //         // if(scrollTop>40){
    //         //     // this.setState({
    //         //     //     myStyle:{background:'rgb(233,171,94)'}
    //         //     // })
    //         //     console.log(scrollTop);
    //         // }
    //         this.handleScroll();
    //     });
    //   }
    
    // constructor(){
    //     super();
    //     this.state={
    //         myStyle:{background:'rgba(211,211,211,0.1)'}
    //     }
    // }
    
    // handleScroll(){
    //     let scroll=window.scrollY;
    //     console.log(scroll);
    //     if(scroll>40){
    //         this.setState({
    //             myStyle:{background:'rgb(233,171,94)'}
    //         },()=>{
    //             console.log(this.state.myStyle);
    //         })
    //     }
    // }

    render(){
        return (
            <div className="page home"  ref='scroll'>
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