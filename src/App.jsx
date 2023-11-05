import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar'
import './App.css'
import './Components/AllSongs'
import AllSongs from './Components/AllSongs';
import Detail from './Components/Detail'
import NewSong from './Components/NewSong';
import EditSong from './Components/EditSong';
function App() {


  return (
    <>

      <Router>
<Navbar />

<Routes>
<Route path="/songs" element={<AllSongs/>}/>
<Route path="/songs/:id" element={<Detail/>}/>
<Route path="/songs/new" element={<NewSong/>}/>
<Route path="/songs/:id/edit" element={<EditSong/>}/>


</Routes>

      </Router>
   
    </>
  )
}

export default App
