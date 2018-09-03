import React, { Component } from 'react';
import '../css/nav.css';
import myTagList from '../myTagList.json';
import Tag from './tag';
import AddTag from './addTag';


class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            isAddTagDisplay: false,
        }
        
    }

    componentWillReceiveProps(){
    }

    isAddTagDisplay = (visible) => {
        this.setState({isAddTagDisplay: !this.state.isAddTagDisplay})
        console.log(this.state.isAddTagDisplay)
    }

    handleChange = (e) => {
        this.setState({
            name : e.target.name
        })
        
    }

    handleSubmit = (e) => {
        console.log('A name submit: ' + this.state.name);
        e.preventDefault();
        
        this.setState({
            value:''
        })
    }

    render(){
        return(
            <div className="navList">
                <button onClick={this.isAddTagDisplay} >Display Add</button>
                <ul className="navListUl">
                    <Tag name={myTagList} isAddTagDisplay={(visible)=>this.isAddTagDisplay(visible)}  />
                </ul>
                { this.state.isAddTagDisplay == true ? 
                    <AddTag />
                    :
                    null
                }
                
            </div>
        )
    }
}



export default Nav

