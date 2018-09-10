import React, { Component } from 'react';
import '../css/addTag.css';

class AddTag extends Component{
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
        if(tagList){
            id = "myTagList" + tagList.length
        }else{
            id = "myTagList0"
        }

        if(this.state.href !== '' && this.state.tagName !== ''){
            if(tagList){
                tagList.push({
                    "id" : id,
                    "href" : this.state.href,
                    "tagName" : this.state.tagName
                })
            }else{
                tagList = [{ 
                    "id" : id,
                    "href" : 'https://' + this.state.href,
                    "tagName" : this.state.tagName
                }]
            }
            localStorage.setItem('myTagList',JSON.stringify(tagList))
            this.setState({
                id:'',
                href:'',
                tagName:'',
            })
            this.props.isAddTagDisplay()
        }else{
            alert('没有填写内容！')
        }

    }

    render(){      
        return(
            <div className="addTag">
                <div className="addTagMain">
                    <div className="closeAddTag" onClick={this.props.isAddTagDisplay}>X</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="tagName">
                            <input onChange={this.handleTagName} type="text" placeholder="Tag Name"/>
                        </div>
                        <br />
                        <div className="href">
                            <input onChange={this.handleHref} type="text" placeholder="Href"/>
                        </div>
                        <br />
                        <input type='submit' value='Submit' className="tagNameSubmit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddTag