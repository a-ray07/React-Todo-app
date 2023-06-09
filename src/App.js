import './App.css';
import React,{useState,useEffect, useContext} from 'react';
import Sidebar from './componenets/Sidebar';
import MainFrame from './componenets/MainFrame';
import { CentralStateProvider } from './context/centralState.context';
function App() {
  
  
 
 
  return (
    <div className="App">
     <p className='hdr'>ToDO List</p>
      <div className='flex-box'>
        <CentralStateProvider>
        <Sidebar />
        <MainFrame />
        </CentralStateProvider>
      </div>
    </div>
  );
}

export default App;
