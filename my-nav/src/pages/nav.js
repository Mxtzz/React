import React, { Component } from 'react';
import '../css/nav.css';
// import myTagList from '../myTagList.json';
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

    componentWillMount(){

    }

    componentWillReceiveProps(nextProps){
        console.log('1')
    }

    isAddTagDisplay = () => {
        this.setState({isAddTagDisplay: !this.state.isAddTagDisplay})
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
            value:'',
            isAddTagDisplay: !this.state.isAddTagDisplay,
        })
    }

    render(){
        return(
            <div className="navList">
                <ul className="navListUl">
                    <Tag isAddTagDisplay={this.isAddTagDisplay}  />
                </ul>
                { this.state.isAddTagDisplay === true ? 
                    <AddTag 
                        isAddTagDisplay={this.isAddTagDisplay} 
                    />
                    :
                    null
                }
                
            </div>
        )
    }
}

export default Nav

