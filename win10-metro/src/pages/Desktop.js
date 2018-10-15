import React, { Component } from 'react';
import '../css/desktop.css';

import StartMenu from './StartMenu.js';

class Desktop extends Component {
    render() {
        return (
            <div className="desktop">
                <StartMenu />
                <div className="stateBar">
                    <div className="startBtn"></div>
                </div>
            </div>
        );
    }
}

export default Desktop;
