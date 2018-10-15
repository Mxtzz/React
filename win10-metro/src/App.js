import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Desktop from './pages/Desktop.js';
// import Update from './pages/Update.js';
import Login from './pages/Login.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Update /> */}
                {/* <Desktop /> */}
                <Login />
            </div>
        );
    }
}

export default App;
