import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './DonateContainer.css'

class DonateContainer extends React.Component {
  einRef = React.createRef()
  searchTermRef = React.createRef()
  cityRef = React.createRef()
  stateRef = React.createRef()
  zipCodeRef = React.createRef()
  form990_amount_minRef = React.createRef()
  form990_amount_maxRef = React.createRef()
  latitudeRef = React.createRef()
  longitudeRef = React.createRef()
  distanceRef = React.createRef()
  categoryRef = React.createRef()
  eligiblRef = React.createRef()
  rowsRef = React.createRef()
  startRef = React.createRef()

  componentDidMount = () => {
    document.addEventListener('DOMContentLoaded', function() {
      let elems = document.querySelectorAll('select');
      let instances = M.FormSelect.init(elems);
    })
  }

  createSearch = (e) => {
    e.preventDefault()
    const inputs = [
      {ein: this.einRef.current && this.einRef.current.value ? this.einRef.current.value : null},
      {searchTerm: this.searchTermRef.current && this.searchTermRef.current.value ? this.searchTermRef.current.value : null},
      {city: this.cityRef.current && this.cityRef.current.value ? this.cityRef.current.value : null},
      {state: this.stateRef.current && this.stateRef.current.value ? this.stateRef.current.value : null},
      {zipCode: this.zipCodeRef.current && this.zipCodeRef.current.value ? this.zipCodeRef.current.value : null},
      {form990_amount_min: this.form990_amount_minRef.current && this.form990_amount_minRef.current.value ? this.form990_amount_minRef.current.value : null},
      {form990_amount_max: this.form990_amount_maxRef.current && this.form990_amount_maxRef.current.value ? this.form990_amount_maxRef.current.value : null},
      {latitude: this.latitudeRef.current && this.latitudeRef.current.value ? this.latitudeRef.current.value : null},
      {longitude: this.longitudeRef.current && this.longitudeRef.current.value ? this.longitudeRef.current.value : null},
      {distance: this.distanceRef.current && this.distanceRef.current.value ? this.distanceRef.current.value : null},
      {category: this.categoryRef.current && this.categoryRef.current.value ? this.categoryRef.current.value : null},
      {eligibl: this.eligiblRef.current && this.eligiblRef.current.value ? this.eligiblRef.current.value : null},
      {rows: this.rowsRef.current && this.rowsRef.current.value ? this.rowsRef.current.value : null},
      {start: this.startRef.current && this.startRef.current.value ? this.startRef.current.value : null}
    ]
    let searchArr = []
    inputs.forEach(i => { 
      if (i[Object.keys(i)[0]] !== null) searchArr.push(`&${Object.keys(i)[0]}=${i[Object.keys(i)[0]]}`)
    })
    
    // console.log('searchArr is', searchArr)
    const search = searchArr.join('')
    // console.log('search is', search)
    this.props.getCenters(search)
    e.currentTarget.reset()
  }
  render() {
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
          <form className="col s12" onSubmit={this.createSearch}>
            <div className="row">
              <div className="col s4 offset-s4">
                <div className="input-field">
                  <input type="number" id="ein" name="ein" ref={this.einRef} />
                  <label htmlFor="ein">EIN</label>
                  <span className="helper-text" data-error="wrong" data-success="right">Employer Identification Number (EIN)</span>
                </div>
                <div className="input-field">
                  <input type="text" id="searchTerm" name="searchTerm" ref={this.searchTermRef} />
                  <label htmlFor="searchTerm">Search</label>
                  <span className="helper-text" data-error="wrong" data-success="right">Charity Name or Keyword. Example: "humane society" or "cancer"</span>
                </div>
                <div className="input-field">
                  <input type="text" id="city" name="city" ref={this.cityRef} />
                  <label htmlFor="city">City</label>
                </div>
                <div className="input-field">
                  <select name="state" ref={this.stateRef}>
                    <option value="">Choose your State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <label>State</label>
                </div>
                <div className="input-field">
                  <input type="number" id="zipCode" name="zipCode" ref={this.zipCodeRef} />
                  <label htmlFor="zipCode">ZIP Code</label>
                </div>
                {/* What do these 2 even refer to? */}
                {/* <input type="text" name="form990_amount_min" ref={this.form990_amount_minRef} placeholder="form990_amount_min" />
                <input type="text" name="form990_amount_max" ref={this.form990_amount_maxRef} placeholder="form990_amount_max" /> */}
                {/* 
                    Users prolly not gonna use these hardly ever, if at all; more likely to use city/state/zip
                    that said, we'll need a way to figure out the distance using those other params. Maybe that's
                    where we were goin with Mapbox?
                 */}
                {/* <input type="text" name="latitude" ref={this.latitudeRef} placeholder="latitude" />
                <input type="text" name="longitude" ref={this.longitudeRef} placeholder="longitude" /> */}
                <div className="input-field">
                  <input type="number" id="distance" name="distance" ref={this.distanceRef} />
                  <label htmlFor="distance">Distance</label>
                  <span className="helper-text" data-error="wrong" data-success="right">(10 mile maximum)</span>
                </div>
                {/* <input type="text" name="category" ref={this.categoryRef} placeholder="category" /> */}
                <div className="input-field left">
                  <p style={{fontSize: '1rem'}}>Eligibility:</p>
                  <p>
                  <label htmlFor="1">
                    <input type="radio" name="eligible" id="1" className="with-gap" ref={this.eligiblRef} value="1" />
                    <span>Yes</span>
                  </label>
                  </p>
                  <p>
                  <label htmlFor="0">
                    <input type="radio" name="eligible" id="0" className="with-gap" ref={this.eligiblRef} value="0" />
                    <span>No</span>
                  </label>
                  </p>
                </div>
                {/*2
                    These would prob be for us for pagination
                 */}
                {/* <input type="text" name="rows" ref={this.rowsRef} placeholder="rows" />
                <input type="text" name="start" ref={this.startRef} placeholder="start" /> */}
              </div>
            </div>
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