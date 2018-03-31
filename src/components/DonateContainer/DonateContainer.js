import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SEARCH_URL }  from '../../helpers/constants'
import axios from 'axios'

class DonateContainer extends Component {
  state = {
    centers: [],
    searchTerm: '',
    location: '',
    damage: true
  }

  handleSearchTerm = (e) => {
    if (e.target.value) this.setState({searchTerm: e.target.value})
  }
  handleLocation = (e) => {
    if (e.target.value) this.setState({location: e.target.value})
  }
  handleDamage = (e) => {
    if (e.target.value) this.setState({damage: e.target.value})
  }
  
  getCenters = () => {
    console.log('search term is', this.state.searchTerm)
    console.log('full search link', SEARCH_URL + this.state.searchTerm)
    // if it's damaged, get a list of recycling centers
    // if it's not, get a list of donation sites
    // axios.post(`${SEARCH_URL}` + `${this.state.searchTerm}`, )
    // .then(res => this.setState({centers: res.data}))

    axios.post({
      url: `${SEARCH_URL}` + `${this.state.searchTerm}`,
        type: 'GET',
        dataType: 'jsonp',
        cors: true ,
        contentType:'application/json',
        secure: true,
                  headers: {
                      'Access-Control-Allow-Origin': '*',
                  }}
    )
    .then(res => this.setState({centers: res.data}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.getCenters()
  }

    
  render () {
    let centers = this.state.centers
    console.log(centers)
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <h3>Ready to make a difference?</h3>
          </div>
          <div className="col s4 offset-s4 center">
            <p>Thank you! Let us get a little information from you so we can help you maximize your impact in the ways that are important to you!</p>
          </div>
        </div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s4 offset-s4">
                <input placeholder="Who do you want to help?" id="search_term" type="text" onChange={this.handleSearchTerm}/>
                <label htmlFor="search_term">Search</label>
              </div>
              {/* <div className="input-field col s4 offset-s4">
                <input placeholder="What state are you in? (2 letter abbreviation)" id="location" type="text" />
                <label htmlFor="location">Location</label>
              </div> */}
            </div>
            {/* <div className="row">
              <div className="col s4 offset-s4">
                <p>
                  <label htmlFor="damage">
                    <input id="damage" type="radio" />
                    <span>Yes</span>
                  </label>
                </p>
                <p>
                  <label htmlFor="damage">
                    <input id="damage" type="radio" checked />
                    <span>No</span>
                  </label>
                </p>
              </div>
            </div> */}
            <div className="col s4 offset-s4">
              <input type="submit" className="btn" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default DonateContainer