import React, { Component } from 'react';
import '../css/App.css';
import Nav from './nav';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="App">
                <div className="myNav">
                    <Nav />
                </div>
            </div>
        );
    }
}



export default App;
