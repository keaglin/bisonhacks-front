import React, { Component } from 'react'
import { Switch, Route }    from 'react-router-dom'
import Header               from '../Header/Header'
import Footer               from '../Footer/Footer'
import Landing              from '../Landing/Landing'
import Donate               from '../Donate/Donate'
// import Map                  from '../Map/Map'
import Results               from '../Results/Results'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <main>
          <Switch>
            <Route exact path='/' render={() => <Landing />} />
            <Route path='/donate' render={() => <Donate />} />
            {/* <Route path='/test' render={() => <Map />} /> */}
            {/* <Route path='/test' render={() => <Map />} /> */}
            <Route exact path='/results' render={(props) => (<Results {...props} />)} />
          </Switch>  
        </main>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App
