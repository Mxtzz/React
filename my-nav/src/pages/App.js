import React, { Component } from 'react';
import '../css/App.css';
import Form from './form';
import Nav from './nav';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }

    render() {
        return (
            <div className="App">
                <Form />
                <div className="myNav">
                    <Nav />
                </div>
                
            </div>
        );
    }
}



export default App;
