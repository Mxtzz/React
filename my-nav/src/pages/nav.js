import React, { Component } from 'react';
import '../css/nav.css';
import myTagList from '../myTagList.json'
import Tag from './tag'

class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            
        }
        
    }

    componentWillReceiveProps(){
        let myTagList = localStorage.getItem('myTagList',JSON.parse())
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
                <ul className="navListUl">
                    <Tag name={myTagList} />
                </ul>
            </div>
        )
    }
}



export default Nav

