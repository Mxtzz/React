import React, { Component } from 'react';
import '../css/startmenu.css';
import '../css/style.css'

class StartMenu extends Component {
    render() {
        return (
            <div className="startMenu">
                <div className="startContainer">
                    <div className="menuTools">

                    </div>
                    <div className="menuList">
                        <ul>
                            <li className="appList">
                                <img className="headIconImg" src={require('../images/windows.png')} alt="" />
                                <p>OneNote</p>
                            </li>
                            <li className="appList">
                                <img className="headIconImg" src={require('../images/windows.png')} alt="" />
                                <p>OneNote</p>
                            </li>
                            <li className="">3</li>
                            <li className="">4</li>
                            <li className="">5</li>
                            <li className="">6</li>
                            <li className="">7</li>
                            <li className="">8</li>
                            <li className="">9</li>
                            <li className="">10</li>
                        </ul>
                    </div>
                    <div className="menuMain">
                        <div className="menuMainLeft">
                            <div className="appL"></div>
                            <div className="appS"></div>
                        </div>
                        <div className="menuMainRight">
                        
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default StartMenu;
