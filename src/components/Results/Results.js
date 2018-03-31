import React from 'react'
import { Link } from 'react-router-dom'
import './Results.css'

const Results = (props) => {
  console.log('location state is', props.location.state.donate)
  return (
    <div className="row">
      <div className="col s12">
          <h3> 
          {props.location.state.donate ? 'Donation ' : 'Recycling '} 
          Centers </h3>
      </div>
      <div className="col s6">
      <h5 className=''> List </h5>
      </div>
      <div className="col s6">
       <h5 className=''> Map View </h5>
      </div>
    </div>
  )
}

export default Results
