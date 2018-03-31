import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


import './Landing.css'

const Landing = () => (
    <React.Fragment>
      <div className='row landing white-text'> 
        <div className='col s12 greeting'>
          <h3 className='logo col s12'>When It Matters</h3>
          <h5 className='slogan col s12'>Empower yourself to donate to those most in need</h5>
        {/* </div>
        <div className='row'> */}
          <div className='col s12'>
            <h6>Make sure you know more about your charity of choice other than their name alone.  Give Smarter and feel confident that the organization you're donating to deserves your support.  Find an organization that values people first and invests into people of need.  Know your organization of choice's percentage of total expenses spent on programs.  What are the salary and benefits of the highest paid official? Give Smarter ... Sign-up for When It Matters and today! </h6>
          </div>
        </div>
      </div>
    </React.Fragment>
)

export default Landing
