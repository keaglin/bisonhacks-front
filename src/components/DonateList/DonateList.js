import React from 'react'
import './DonateList.css'

const DonateList = (props) => (
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
export default DonateList