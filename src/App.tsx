import React from 'react'
import './App.scss'
import SideBar from './components/sidebar/SideBar';
import Yamap from './components/Yamap';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Yamap />
    </div>
  )
}

export default App;
