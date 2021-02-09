import React from 'react';
import './TabData.css';


const TabData = (props) =>{
    return (
        <div className ='containerTabData'>
        <p className = "TabDataStyle">Displaying Tab {props.TabFocussed}</p>
        </div>
    )
}

export default TabData;