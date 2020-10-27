import React,{useState,useEffect,useContext}  from "react";
import ColorArray from '../ColorData'
import './selector-UI.css'
import { CopyToClipboard } from "react-copy-to-clipboard";
import {ColorContext} from '../ColorContext';
// {ColorArray[2].schemeChart.map((oby,index)=>{return (<div className="color-unit-section"> </div>)})}

function SelectorUI() {

  const {contextColor}=useContext(ColorContext);

    const [current, setCurrent] = useState('');

    useEffect(() => {
        const timeoutid = setTimeout(() => {
          setCurrent('');
        }, 1000);
        return () => clearTimeout(timeoutid);
      }, [current]);


  return(
   <div className="slector-outer-wrapper" >

   <nav>
    <h3 className="selctor-theme-title">{ColorArray[contextColor].colorScheme}</h3>
   </nav>
    
    <div className="color-pallet-wrapper">

    {(current !=="")?<div className="copied-alert"> {`copied: ${current}`}  </div>:null}
     
            

    {ColorArray[contextColor].schemeChart.map((oby,index)=>{return(<CopyToClipboard key={index} text={oby.colorHex}>
        <div  className="color-unit-section" onClick={()=>{setCurrent(oby.colorHex)}}> 
    <div className="color-filled" style={{backgroundColor:(oby.colorHex)}}> 
       <span>{oby.colorHex}</span> 
    </div>
    <h3 className="color-filled-name">{oby.colorName}</h3>
    </div>
    </CopyToClipboard>
    )})}
        
    </div>
      
    </div>

  
  );
}

export default SelectorUI;