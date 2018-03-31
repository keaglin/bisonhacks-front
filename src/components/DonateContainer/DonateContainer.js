import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SEARCH_URL }  from 'helpers/constants'
import axios from 'axios'

class DonateContainer extends Component {
  state = {
    centers: [],
    searchTerm: '',
    donate: true
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`${SEARCH_URL}+${this.state.searchTerm}`)
    .then(res => this.setState({centers: res.data}))
  }
    
  render () {
    return (
      <div>
        <h1>Ready to make a donation?</h1>
        <p>Thank you! Let us get a little information from you so we can direct you to the proper organizations for your contribution</p>
        <p>Is it damaged?</p>
        <div>
          <Link to={{
            pathname: '/results',
            state: { donate: false }
          }}>
          <button>Yes</button>
          </Link>
          <Link to={{
            pathname: '/results',
            state: { donate: true }
          }}>
          <button>No</button>
          </Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          
        </form>
      </div>
    )
  }
}
export default DonateContainer