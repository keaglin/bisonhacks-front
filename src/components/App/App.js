import React, { Component } from 'react'
import { Switch, Route }    from 'react-router-dom'
import Header               from '../Header/Header'
import Footer               from '../Footer/Footer'
import Landing              from '../Landing/Landing'
import DonateContainer      from '../DonateContainer/DonateContainer'
import About                from '../About/About'
// import { SEARCH_URL }  from '../../helpers/constants'
import axios from 'axios'
// import Map                  from '../Map/Map'
import './App.css'
import Login from '../Login/Login'

class App extends Component {
  state = {
    centers: [],
    // location: '',
    // damage: true
    // not sure what we were doing here lol
  }

  getCenters = search => {
    // 1. do the search and put what we need in state for displaying results

    // can worry about this stuff later
    // if it's damaged, get a list of recycling centers
    // if it's not, get a list of donation sites

    // console.log(`${SEARCH_URL}${search}`)
    axios.post(`${SEARCH_URL}${search}`)
      .then(res => console.log('res is', res))
      // .then(res => this.setState({centers: res.data}))
      .catch(err => console.log('An error occurred', err))
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <main>
          <Switch>
            <Route exact path='/' render={() => <Landing />} />
            {/* <Route path='/home' render={() => <Landing />} /> */}
            <Route path='/about' render={() => <About />} />
            <Route path='/donate' render={() => <DonateContainer getCenters={this.getCenters} />} />
            {/* Only DonateContainer should be calling DonateList because that's the only way a search will have been performed */}
            {/* <Route path='/results' render={props => (<DonateList {...props} />)} /> */}
            <Route path='/login' render={() => <Login />} />
            {/* <Route path='/test' render={() => <Map />} /> */}
          </Switch> 
          {/* <Login /> */}
        </main>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App
