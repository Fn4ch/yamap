import React, { useState } from 'react'
import './App.scss'
import Yamap from './components/yamap/Yamap'
import MapWithObjects from './components/map/Map'
import Header from './components/header/header'
import SideBar from './components/sidebar/SideBar'

function App() {

  const [page, setPage] = useState(true)

  return (
    <div className="App">
      <Header func={setPage} />
      {page ? (<><SideBar /><Yamap /></>) : <MapWithObjects />}
    </div>
  )
}

export default App;
