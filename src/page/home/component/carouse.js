import React,{Component} from 'react';
// import {Carousel} from 'antd';
// import Swiper from '../../../component/swiper';
import NewSwiper from '../../../component/newSwiper';
import {withRouter} from 'react-router-dom';

class CarouseHome extends Component{
    constructor(){
        super();
        this.state={
            recommend:[
                {
                    text:'趣味拼团',
                    imgurl:'banner/banner1.jpg',
                    goodsid:0
                },
                {
                    text:'商品1',
                    imgurl:'banner/banner2.jpg',
                    goodsid:54
                },{
                    text:'商品2',
                    imgurl:'banner/banner3.jpg',
                    goodsid:53
                }
            ]
        }

        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(goodsId){
        if(goodsId===0){
            return
        }else{
            this.props.history.push('/detail/'+goodsId)
        }
    }
    render(){
        return (
            <div className='carouse'>
                {/* <Carousel autoplay>
                    {
                        this.state.recommend.map(item=>{
                            return (
                                <div key={item.text}>
                                    <img src={item.imgurl} alt=''/>
                                </div>
                            )
                        })
                    }
                </Carousel> */}
                {/* <Swiper type={'img'} direction={false} data={this.state.recommend}/> */}
                <NewSwiper type={'img'} direction={'horizontal'} data={this.state.recommend} handleClick={this.handleClick}/>
            </div>
        )
    }
}
CarouseHome=withRouter(CarouseHome);
export default CarouseHome
