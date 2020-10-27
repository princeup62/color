import React,{useContext} from 'react';
import './grad.css';
import ColorArray from '../ColorData';
import {useHistory}  from 'react-router-dom';
import {ColorContext} from '../ColorContext';

function Grad(props) {

    const {setContextCLR}=useContext(ColorContext);

    const history = useHistory();

    return (
    
     <div className="color-tray-outer-1">
         <div className="color-tray-inner">
         <div className="color-tray">

         {ColorArray[props.id].schemeChart.map((oby,index)=>{return(<div key={index} onClick={()=>{history.push('/selector');setContextCLR(props.id)}} style={{backgroundColor:(oby.colorHex),width:"80px",height:"100 %",cursor:"pointer"}}></div>)})}
             
         </div>
         <div className="color-theme-subject">
             <h3 className="color-title">{props.title}</h3>
         </div>
             
         </div>
     </div>
    
    );
  }
  
  export default Grad;