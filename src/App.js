import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/layout/footer/footer'
import Header from './components/layout/header/header'

import Home from './components/pages/home/home'
import Gallery from './components/pages/gallery/gallery'
import Films from './components/pages/films/films'
import About from './components/pages/films/films'

function App() {
  return (
    <Router>
      <Header />
        <main>
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/films">
              <Films />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      <Footer />
    </Router>
  )
}

export default App;
