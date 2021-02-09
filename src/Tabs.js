import React from 'react';
import classes from './Tabs.module.css';
import Tab from './Tab';
import './Tabs1.css'


const MyTabs = (props) => {
    const tabsToAdd = () => {
        return props.tabContents.map((tabContent, index) => {
            return (
                <Tab
                    tabName={tabContent.tabName}
                    focussed = {tabContent.focussed}
                    key={tabContent.id}
                    setFocusToSelectedTab = {() => props.setFocusToSelectedTab(index)}
                    onDeleteClick = {() => props.onDeleteClickAlert(index)}
                ></Tab>
            )
        })
    };

    let rightArrowTabs = [classes.rightArrowTabs];
    let leftArrowTabs = [classes.leftArrowTabs];
    if(props.initialKeyIndex === props.tabContents.length-1){
        rightArrowTabs.push(classes.hideTheButton);
    }
    if (props.initialKeyIndex === 0){
        leftArrowTabs.push(classes.hideTheButton);
    }
    if(props.tabContents.length < 6){
        rightArrowTabs.push(classes.hideTheButton);
        leftArrowTabs.push(classes.hideTheButton);
    }


    const scrollToRight = () =>{
        console.log("Getting Called");
        // document.getElementsByClassName('tabsParent')[0].scrollLeft += 50; 
        document.getElementsByClassName('individualTabs')[0].scrollLeft += 245; 
    }

    const scrollToLeft = () =>{
        console.log("Getting Called");
        // document.getElementsByClassName('tabsParent')[0].scrollLeft += 50; 
        document.getElementsByClassName('individualTabs')[0].scrollLeft -= 245; 
    }


    return (
        <div className={classes.tabsWithActions}>
            <div className = {classes.onRightArrowdiv} onClick = {scrollToLeft}>
            <button onClick = {props.onLeftArrowCLick} className={leftArrowTabs.join(' ')}>&#60;</button>
            </div>
            <div className='tabsParent'>
                <div className='individualTabs' >
                    {tabsToAdd()}
                </div>
            </div>
            <div className = {classes.onRightArrowdiv} onClick = {scrollToRight}>
            <button onClick = {props.onRightArrowClick} className={rightArrowTabs.join(' ')}>&#62;</button>
            </div>
            <button onClick = {props.onPlusClick} className={classes.addTabsButton}>+</button>
        </div>
    )

}

export default MyTabs;