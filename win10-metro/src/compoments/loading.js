import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tips:[
                    '正在启动Windows',
                    '即将自动更新',
                    '更新将不会进行很长时间',
                    '但有时可能会进行很长时间 : )'
                ],
            tipsIndex: 0
        }
    }
    componentWillMount(){
        this.tipsIndex1()
    }

    tipsIndex1(){
        setTimeout(() => {
            this.setState({ tipsIndex: 1 })
            this.tipsIndex2()
        }, 5000);
    }
    tipsIndex2(){
        setTimeout(() => {
            this.setState({ tipsIndex: 2 })
            this.tipsIndex3()
        }, 10000);
    }
    tipsIndex3(){
        setTimeout(() => {
            this.setState({ tipsIndex: 3 })
            this.tipsIndex2()
        }, 10000);
    }

    render() {
        return (
            <div className="loading">
                <div className="loadingContainer">
                    <div className="loadingAnimate">
                        <div className="bg"></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>  
                    <div className="loadingText">
                        <p>{this.state.tips[this.state.tipsIndex]}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;
