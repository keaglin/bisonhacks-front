import React from 'react'
import results from '../../helpers/fakedresults.json'
import './DonateList.css'

const DonateList = (props) => {
  console.log('results is', results)
  return (
    <div className="row">
      <div className="col s12">
          <h3> 
          {/* {props.location.state.donate ? 'Donation ' : 'Recycling '}   */}
          Donation Centers </h3>
      </div>
      <div className="col s6">
      <h5 className=''> List </h5>
        <ul>
          {
            results.map((result, index) => {
              console.log(result)
              return <li key={index}>{result.name}</li>
            })
          }
        </ul>
      </div>
      <div className="col s6">
      <h5 className=''> Map View </h5>
      </div>
    </div>
  )
}
export default DonateList