import React, { Component } from 'react';
import '../css/tag.css';

class Tag extends Component{
    constructor(props){
        super(props);
        this.state={
            myTagList : []
        }
    }

    componentWillMount(){
        this.setState({ 
            myTagList : JSON.parse(localStorage.getItem('myTagList')) 
        })
    }

    componentWillReceiveProps(){
        this.setState({ 
            myTagList : JSON.parse(localStorage.getItem('myTagList')) 
        })
    }

    addNewTag=()=>{
        this.props.isAddTagDisplay()
    }
    
    render(){
        // let tagList = this.props.tagList;
        let tagList = this.state.myTagList
        this.state.myTagList ? tagList = this.state.myTagList : tagList = []
        let listItems = tagList.map((item) =>
            <li className="navListLi" key={item.id}>
                <a href={item.href} target="_blank" className="navListA">
                    <div>
                        <img src={require('../logo.svg')} className="navImg" alt="logo" />
                        <p className="navListName">{item.tagName}</p>
                    </div>
                </a>
            </li>
        );
        return(
            <ul className="navListUl">
                {listItems}
                <li className="navListLi">
                    <button className="navListA" onClick={this.props.isAddTagDisplay}>
                        <div>
                            <img src={require('../logo.svg')} className="navImg"  alt="logo"/>
                            <p className="navListName">Add New Tag</p>
                        </div>
                    </button>
                </li>
            </ul>
        )
    }
}

export default Tag