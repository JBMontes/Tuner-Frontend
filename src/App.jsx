import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar'
import './App.css'
// import './Components/AllArtists'

import AllArtists from './Components/AllArtists';
import Detail from './Components/Detail'
import NewArtist from './Components/NewArtist';
import EditArtist from './Components/EditArtist';
import Home from './Pages/Home';
function App() {


  return (
    <>

      <Router>
<Navbar />

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/artists" element={<AllArtists/>}/>
<Route path="/artists/:id" element={<Detail/>}/>
<Route path="/artists/new" element={<NewArtist/>}/>
<Route path="/artists/:id/edit" element={<EditArtist/>}/>


</Routes>

      </Router>
   
    </>
  )
}

export default App
