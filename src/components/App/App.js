import React, { Component } from 'react'
import { Switch, Route }    from 'react-router-dom'
import Header               from '../Header/Header'
import Footer               from '../Footer/Footer'
import Landing              from '../Landing/Landing'
import DonateContainer      from '../DonateContainer/DonateContainer'
import DonateList           from '../DonateList/DonateList'
// import Map                  from '../Map/Map'
import './App.css'
import Login from '../Login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <main>
          <Switch>
            <Route exact path='/' render={() => <Landing />} />
            <Route path='/donate' render={() => <DonateContainer />} />
            <Route path='/results' render={(props) => (<DonateList {...props} />)} />
            <Route path='/login' render={() => <Login />} />
            {/* <Route path='/test' render={() => <Map />} /> */}
          </Switch> 
        </main>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App
