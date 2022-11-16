import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header" 
import Home from "./views/Home";
import Team from "./views/Team";
import Publication from "./views/Publication"
import './App.css';
import Footer from "./Components/Footer/Footer";
import Kaleidoscope from "./views/Kaleidoscope";

function App() {
  const [open, setOpen]= useState(false)
  return (
    <>
    <Router>
       <header>
         <Header open={open} setOpen={setOpen}/>
       </header>
       <main>
          <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/team" exact element={<Team />}/>
          <Route path="/publication" exact element={<Publication />}/>
          <Route path="/kaleidoscope" exact element={<Kaleidoscope />}/>
          </Routes>
       </main> 
       <footer>
           <Footer />
       </footer>
    </Router>
  </>
  );
}

export default App;
