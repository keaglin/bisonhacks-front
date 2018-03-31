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
    // if it's damaged, get a list of recycling centers
    // if it's not, get a list of donation sites
    axios.get(`${SEARCH_URL}+${this.state.searchTerm}`, )
    .then(res => this.setState({centers: res.data}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.getCenters()
  }

    
  render () {
    return (
      <div>
        <h3>Ready to make a difference?</h3>
        <p>Thank you! Let us get a little information from you so we can help you maximize your impact in the ways that are important to you!</p>
        <div class="row">
          <form class="col s12" onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="input-field col s4 offset-s4">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s4 offset-s4">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s4 offset-s4">
                <input disabled value="I am not editable" id="disabled" type="text" class="validate" />
                <label for="disabled">Disabled</label>
              </div>
            </div>
            <div class="row">
              <div className="input-field col s4 offset-s4">
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default DonateContainer