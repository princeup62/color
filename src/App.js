import React from "react";
import GradMixer from './ColorGalley/GradMixer';
import SelectorUI from '../src/SelectorUI/SelectorUI'
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import {ColorProvider}  from '../src/ColorContext';

import './App.css'


function App() {
  return(
    <>
    <ColorProvider>
    <Router>
    <Switch>

    <Route path="/" exact  component={GradMixer}></Route>
    <Route path="/selector" exact  component={SelectorUI}></Route>

    </Switch>
    </Router>
    </ColorProvider>

    </>
  )
}

export default App;
