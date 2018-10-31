import React, { Component } from 'react'
import { Switch, Route }    from 'react-router-dom'
import Header               from '../Header/Header'
import Footer               from '../Footer/Footer'
import Landing              from '../Landing/Landing'
import DonateContainer      from '../DonateContainer/DonateContainer'
import DonateList           from '../DonateList/DonateList'
import About                from '../About/About'
import { SEARCH_URL }  from '../../helpers/constants'
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
    // do the search and put what we need in state for displaying
    // console.log('search term is', this.state.searchTerm)
    // console.log('full search link', SEARCH_URL + this.state.searchTerm)
    // if it's damaged, get a list of recycling centers
    // if it's not, get a list of donation sites
    // axios.post(`${SEARCH_URL}` + `${this.state.searchTerm}`, )
    // .then(res => this.setState({centers: res.data}))

    axios.post(`${SEARCH_URL}` + `${search}`
        // type: 'GET',
        // dataType: 'jsonp',
        // cors: true ,
        // contentType:'application/json',
        // secure: true,
        //           headers: {
        //               'Access-Control-Allow-Origin': '*',
        //           }}
    )
    .then(res => this.setState({centers: res.data}))
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
            <Route path='/results' render={props => (<DonateList {...props} />)} />
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
