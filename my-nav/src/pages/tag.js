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
        let tagList = this.state.myTagList
        this.state.myTagList ? tagList = this.state.myTagList : tagList = []

        let listItems = tagList.map((item) =>
            <li className="navListLi" key={item.id}>
                <a href={item.href} title={item.tagName} target="_blank" className="navListA">
                    <div>
                        <div className="navImgContent">
                            <img src={item.href+'/favicon.ico'} className="navImg" alt="logo" />
                        </div>
                        <div className="navListName">{item.tagName}</div>
                    </div>
                </a>
            </li>
        );

        return(
            <ul className="navListUl">
                {listItems}
                <li className="navListLi">
                    <div className="navListA" onClick={this.props.isAddTagDisplay}>
                        <div>
                            <img src={require('../logo.svg')} className="navImg"  alt="logo"/>
                            <div className="navListName">Add New Tag</div>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Tag