import React,{useState,createContext} from 'react';


export const ColorContext=createContext();


export const ColorProvider=(props)=>
{

const [contextColor,setContextCLR]=useState(0);


    return(
      <ColorContext.Provider value={{contextColor,setContextCLR}}>
       {props.children}
      </ColorContext.Provider>
    );
}