import React, { Component } from 'react';
// import myTagList from '../myTagList.json'

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
        e.preventDefault();
        let tagList1 = localStorage.getItem('myTagList')
        let tagList = JSON.parse(tagList1)
        let id = ''
        console.log(tagList)
        if(tagList){
            id = "myTagList" + tagList.length
        }else{
            id = "myTagList0"
        }

        if(tagList){
            tagList.push({
                "id" : id,
                "href" : this.state.href,
                "tagName" : this.state.tagName
            })
        }else{
            tagList = [{ 
                "id" : id,
                "href" : this.state.href,
                "tagName" : this.state.tagName
            }]
        }
        
        localStorage.setItem('myTagList',JSON.stringify(tagList))
        this.setState({
            id:'',
            href:'',
            tagName:'',
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    TagName:
                    <input onChange={this.handleTagName}/>
                </label>
                <br />
                <label>
                    Href:
                    <input onChange={this.handleHref}/>
                </label>
                
                <br />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}
export default Form