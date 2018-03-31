import React, { Component } from 'react'
import { Switch, Route }    from 'react-router-dom'
import Header               from '../Header/Header'
import Footer               from '../Footer/Footer'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          Welcome to Logo
          <Switch>
          </Switch>  
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
