import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {
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
                        <p>更新将不会进行很长时间</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;
