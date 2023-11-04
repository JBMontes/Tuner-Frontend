import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar'
import './App.css'
import './Components/AllSongs'
import AllSongs from './Components/AllSongs';

function App() {


  return (
    <>
     <h1>Hi</h1>
      <Router>
<Navbar />
<AllSongs />
<Routes>
{/* <Route path="/" element={}/> */}
</Routes>

      </Router>
   
    </>
  )
}

export default App
