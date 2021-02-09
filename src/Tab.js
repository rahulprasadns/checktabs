import React from 'react';
import classes from './Tab.module.css';

const Tab = props =>{
    
    let tabStyleClass = [classes.tabStyle]
    if(props.focussed === true){
        tabStyleClass.push(classes.tabStyleFocus)
    }

    return (
        <div className = {tabStyleClass.join(' ')} >
            <div onClick = {props.setFocusToSelectedTab}>
            <p className = {classes.tabTextSyle}>{props.tabName}</p>
            </div>
            <button onClick = {props.onDeleteClick} className = {classes.crossButton}>&times;</button>
        </div>
    )
}

export default Tab;