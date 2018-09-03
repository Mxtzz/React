import React, { Component } from 'react';
import '../css/nav.css';
import myTagList from '../myTagList.json'

class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            
        }
        
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

class Tag extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    componentWillReceiveProps(){
        // this.props.myTagList
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
                    <a href='' className="navListA">
                        <div>
                            <img src={require('../logo.svg')} className="navImg"  alt="logo"/>
                            <p className="navListName">Add New Tag</p>
                        </div>
                    </a>
                </li>
            </ul>
        )
    }
}

export default Nav

