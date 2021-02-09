import React, { useState } from 'react';
import './App.css';
import classes from './App.module.css'
import MyTabs from './Tabs';
import TabData from './TabData'

let TabFocussed = 1;
let numberOfTabs = 3;
let initialKeyIndex = 0;
let random = Math.random();
let tabsData = []
for (let i = 1; i <= numberOfTabs; i++) {
  let focussed = false
  if (i === TabFocussed) {
    focussed = true;
  }
  else {
    focussed = false;
  }
  tabsData.push({ tabName: `Tab ${i}`, focussed: focussed, id: i });
}


function App() {
  const [myAlertText, setMyAlertText] = useState(null);
  const [tempButton, setTextButton] = useState(null);
  const [displayBlock, setDisplayBlock] = useState([classes.alertPopup]);

  const [tabContents, setTabContents] = useState({
    tabsData: tabsData
  });
  console.log(tabContents);

  const setFocusToSelectedTab = (index) => {
    let keyIndex = tabContents.tabsData.findIndex(p => p.id === TabFocussed);
    let retreiveIndex = { ...tabContents.tabsData[keyIndex] };
    retreiveIndex.focussed = false;
    const tabsData = [...tabContents.tabsData];
    tabsData[keyIndex] = retreiveIndex;
    keyIndex = index;
    retreiveIndex = { ...tabContents.tabsData[keyIndex] };
    retreiveIndex.focussed = true;
    tabsData[keyIndex] = retreiveIndex;
    setTabContents({ tabsData: tabsData });
    TabFocussed = tabsData[keyIndex].id;
    initialKeyIndex = keyIndex;
  }

  const onRightArrowClick = () => {
    let keyIndex = tabContents.tabsData.findIndex(p => p.id === TabFocussed);
    let retreiveIndex = { ...tabContents.tabsData[keyIndex] };
    retreiveIndex.focussed = false;
    const tabsData = [...tabContents.tabsData];
    tabsData[keyIndex] = retreiveIndex;
    keyIndex = keyIndex + 1;
    TabFocussed = tabsData[keyIndex].id;
    retreiveIndex = { ...tabContents.tabsData[keyIndex] };
    retreiveIndex.focussed = true;
    tabsData[keyIndex] = retreiveIndex;
    setTabContents({ tabsData: tabsData });
    initialKeyIndex = keyIndex;
  }

  const onLeftArrowCLick = () => {
    console.log("called leftClick");
    let keyIndex = tabContents.tabsData.findIndex(p => p.id === TabFocussed);
    let retreiveIndex = { ...tabContents.tabsData[keyIndex] };
    retreiveIndex.focussed = false;
    const tabsData = [...tabContents.tabsData];
    tabsData[keyIndex] = retreiveIndex;
    keyIndex = keyIndex - 1;
    TabFocussed = tabsData[keyIndex].id;
    retreiveIndex = { ...tabContents.tabsData[keyIndex] };
    retreiveIndex.focussed = true;
    tabsData[keyIndex] = retreiveIndex;
    setTabContents({ tabsData: tabsData });
    initialKeyIndex = keyIndex;
  }

  const onPlusClick = () => {
    if (tabContents.tabsData.length === 10) {
      setMyAlertText(`Maximum Tabs Reached`);
      setTextButton(null);
      let temp = displayBlock;
      temp.push(classes.displayBlock);
      setDisplayBlock(temp);
      return;
    }
    if (tabContents.tabsData.length === 0) {
      const tabsData = [...tabContents.tabsData];
      TabFocussed = 1;
      tabsData.push({ tabName: `Tab ${1}`, focussed: true, id: 1 });
      setTabContents({ tabsData: tabsData });
      initialKeyIndex = 0;
    }
    else {
      let temp = [];
      for (let i = 0; i < tabContents.tabsData.length; i++) {
        temp.push(tabContents.tabsData[i].id)
      }
      temp.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
      let temp1 = tabContents.tabsData.length + 1;
      console.log(TabFocussed);
      let keyIndex = tabContents.tabsData.findIndex(p => p.id === TabFocussed);
      console.log(keyIndex);
      for (let i = 1; i <= temp1; i++) {
        if (temp.includes(i)) {
          console.log(temp);
          console.log("Came to Add Continue");
          continue;
        }
        else if (i === temp1) {
          if (i + 1 in temp) {
            continue;
          }
          else {
            let retreiveIndex = { ...tabContents.tabsData[keyIndex] };
            retreiveIndex.focussed = false;
            const tabsData = [...tabContents.tabsData];
            tabsData[keyIndex] = retreiveIndex;
            TabFocussed = i;
            tabsData.push({ tabName: `Tab ${i}`, focussed: true, id: i });
            setTabContents({ tabsData: tabsData });
            initialKeyIndex = tabsData.length - 1;
            break;
          }
        }
        else {
          let retreiveIndex = { ...tabContents.tabsData[keyIndex] };
          retreiveIndex.focussed = false;
          const tabsData = [...tabContents.tabsData];
          tabsData[keyIndex] = retreiveIndex;
          TabFocussed = i;
          tabsData.push({ tabName: `Tab ${i}`, focussed: true, id: i });
          setTabContents({ tabsData: tabsData });
          initialKeyIndex = tabsData.length - 1;
          break;
        }
      }
    }
  }

  
  const onDeleteClickAlert = (index) =>{
    let tabsData = [...tabContents.tabsData];
    if(tabsData.length === 1){
      random = Math.random();
      setMyAlertText(`Minimum Tabs Reached `);
      let temp = displayBlock;
      temp.push(classes.displayBlock);
      setDisplayBlock(temp);
      setTextButton(       <button onClick = {() => onDeleteClick(index)} className ={classes.conformationButton}>Ok</button>);
      setTextButton(null);
    }
    else{
      setMyAlertText(`Do you want to delete Tab ${tabsData[index].id}`);
      setTextButton(
        <button onClick = {() => onDeleteClick(index)} className ={classes.conformationButton}>Ok</button>
      )
      let temp = displayBlock;
      temp.push(classes.displayBlock);
      setDisplayBlock(temp);
    }


  }

  const onCrossClick = () => {
    setDisplayBlock([classes.alertPopup]);
  }

  const onDeleteClick = (index) => {
    setDisplayBlock([classes.alertPopup]);
    console.log(index);
    let tabsData = [...tabContents.tabsData];
    if (tabsData.length > 1) {
      if (tabsData.length !== 1) {
        if (index === 0) {
          let keyIndex = tabContents.tabsData.findIndex(p => p.id === TabFocussed);
          let retreiveIndex = { ...tabContents.tabsData[keyIndex] };
          retreiveIndex.focussed = false;
          tabsData[keyIndex] = retreiveIndex;
          TabFocussed = tabContents.tabsData[index + 1].id;
          console.log(index, TabFocussed);

          keyIndex = tabContents.tabsData.findIndex(p => p.id === TabFocussed);
          retreiveIndex = { ...tabContents.tabsData[keyIndex] };
          retreiveIndex.focussed = true;
          tabsData[keyIndex] = retreiveIndex;
          console.log(keyIndex);
          initialKeyIndex = keyIndex - 1;
        }
        else {
          let keyIndex = tabContents.tabsData.findIndex(p => p.id === TabFocussed);
          let retreiveIndex = { ...tabContents.tabsData[keyIndex] };
          retreiveIndex.focussed = false;
          tabsData[keyIndex] = retreiveIndex;
          TabFocussed = tabContents.tabsData[index - 1].id;
          console.log(index, TabFocussed);
          keyIndex = tabContents.tabsData.findIndex(p => p.id === TabFocussed);
          retreiveIndex = { ...tabContents.tabsData[keyIndex] };
          retreiveIndex.focussed = true;
          tabsData[keyIndex] = retreiveIndex;
          initialKeyIndex = keyIndex;
        }
      }
      tabsData.splice(index, 1);
      setTabContents({ tabsData: tabsData });
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='headerTitle'>
          <p className='headerTitleText'>Demo Tabs Container</p>
        </div>
        <div className='tabsContainer'>
          <MyTabs
            tabContents={tabContents.tabsData}
            setFocusToSelectedTab={setFocusToSelectedTab}
            onRightArrowClick={onRightArrowClick}
            onLeftArrowCLick={onLeftArrowCLick}
            onPlusClick={onPlusClick}
            TabFocussed={TabFocussed}
            onDeleteClickAlert={onDeleteClickAlert}
            initialKeyIndex={initialKeyIndex}
          />
        </div>
        <div>
          <TabData
            TabFocussed={TabFocussed}>
          </TabData>
        </div>
      </div>
      <div className={displayBlock.join(' ')}>
      <div className={classes.modalContent}>
      <span onClick = {onCrossClick} className={classes.closeButton}>&times;</span>
      <p>{myAlertText}</p>
      {tempButton}
    </div>
    </div>
    </div>
  );
}

export default App;
