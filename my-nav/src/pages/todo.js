import React, { Component } from 'react';
import '../css/App.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:10,
        }
    }

    handelClick = e => {
        e.preventDefault();
        this.setState({ count:this.state.count + 1 });
    }

    clearClick = e => {
        e.preventDefault();
        this.setState({count:this.state.count = 0});
    }

    render() {
        return (
            <div className="App">
                <ul>
                    <li>
                        <a href='#' onClick={this.handelClick} className="App-title">
                            you click {this.state.count} times.
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Todo;
