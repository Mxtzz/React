import React, { Component } from 'react';
import myTagList from '../myTagList.json'

const tagList = myTagList.myTagList

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            href:'',
            tagName:'',
        }
    }

    handleHref = (e) => {
        this.setState({
            href : e.target.value
        })
    }

    handleTagName = (e) => {
        this.setState({
            tagName : e.target.value
        })
    }

    handleId = (e) => {
        this.setState({
            id : e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state.id);
        console.log(this.state.tagName);
        console.log(this.state.href);
        e.preventDefault();
        console.log(tagList)

        let id = "myTagList" + tagList.length
        tagList.push({ 
            "id" : id,
            "href" : this.state.href,
            "tagName" : this.state.tagName
        })
        console.log(tagList)

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    TagName:
                    <input value={this.state.value} onChange={this.handleTagName}/>
                </label>
                <br />
                <label>
                    Href:
                    <input value={this.state.value} onChange={this.handleHref}/>
                </label>
                
                <br />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}
export default Form