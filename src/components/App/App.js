import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Header  from "../Header/Header"
import Footer from "../Footer/Footer"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    )
  }
}

export default App
