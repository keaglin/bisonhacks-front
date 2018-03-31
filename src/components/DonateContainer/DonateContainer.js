import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SEARCH_URL }  from '../../helpers/constants'
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
        <h3>Ready to make a difference?</h3>
        <p>Thank you! Let us get a little information from you so we can help you maximize your impact in the ways that are important to you!</p>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input disabled value="I am not editable" id="disabled" type="text" class="validate" />
                <label for="disabled">Disabled</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                This is an inline input field:
                <div class="input-field inline">
                  <input id="email_inline" type="email" class="validate" />
                  <label for="email_inline">Email</label>
                  <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default DonateContainer