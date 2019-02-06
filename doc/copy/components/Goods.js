import React,{Component} from 'react';

class Goods extends Component{
    componentWillMount(){
        // let {match,history}=this.props;
        console.log(this.props);
    }

    render(){
        let {match}=this.props;
        return <div>商品详情{match.params.id}</div>
    }
}

export default Goods;
