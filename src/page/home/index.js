import React,{Component} from 'react';
import FooterBar from '../../component/footerBar';
import HeaderBar from '../../component/headerBar';
import CarouseHome from './component/carouse';
import NewsNotice from './component/newsNotice';
import Nav from './component/nav';
import Activity from './component/activity';
import Topic from './component/topic';
import GoodsHot from './component/goodsHot';
import { Spin } from 'antd';
import './home.scss';

class Home extends Component{
    constructor(){
        super();
        this.state={
            currentBg:'rgba(211,211,211,0.3)',
            loading:true
        }
    }
    onScrollHandle(event) {
        const clientHeight = event.target.clientHeight
        const scrollHeight = event.target.scrollHeight
        const scrollTop = event.target.scrollTop
        const isBottom = (clientHeight + scrollTop === scrollHeight)
        if(scrollTop>=100){
            this.setState({
                currentBg:'rgba(216,172,116,.7)'
            })
        }
        if(scrollTop>260){
            this.setState({
                currentBg:'rgba(216,172,116,1)'
            })
        }
        if(scrollTop<100){
            this.setState({
                currentBg:'rgba(211,211,211,0.3)'
            })
        }
        if(isBottom){
            this.setState({
                curentPage:this.state.curentPage+1
            },()=>{
                // console.log('isbottom',this.state.curentPage);
            })
        }
    }
    componentDidMount() {
        if (this.contentNode) {
            this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
        }
        this.setState({
            loading:false
        })
    }
    componentWillUnmount() {
        if (this.contentNode) {
            this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
        }
    }

    render(){
        return (
            <div className="page home">
                <Spin spinning={this.state.loading} size='large'/>
                <div id='headerwrapper' style={{'background': this.state.currentBg}}>
                    <HeaderBar />
                </div>
                <div 
                className="main" 
                ref={ node => this.contentNode = node }
                style={{overflowY: "scroll"}}
                >
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