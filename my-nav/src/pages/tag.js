import React, { Component } from 'react';
import '../css/nav.css';

class Tag extends Component{
    constructor(props){
        super(props);
        this.state={
            myTagList : []
        }
    }

    componentWillReceiveProps(){
        
    }
    addNewTag=()=>{
        this.props.isAddTagDisplay(true)
    }
    
    render(){
        let name = this.props.name.myTagList;
        let listItems = name.map((item) =>
            <li className="navListLi" key={item.id}>
                <a href={item.href} className="navListA">
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
                    <button className="navListA">
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