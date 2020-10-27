import React from 'react';
import  Grad  from './Grad'
import ColorArray from '../ColorData'
import './grad-mixer.css'

// onClick={()=>history.push('/selector')}

function GradMixer() {

    return (

    <div className='outer' >

    {ColorArray.map(((oby,index)=>{return(<Grad title={oby.colorScheme} key={index} id={index}/>)}))}
    
    </div>
    
    );
  }
  
  export default GradMixer; 