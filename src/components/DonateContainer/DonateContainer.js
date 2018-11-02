import React from 'react'


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

  createSearch = (e) => {
    // debugger
    // this is where we gonna get what we need from the form to compose the user-input part of the search link
    e.preventDefault()
    // link format
    // &ein=${this.einRef.current.value}
    // &searchTerm=${this.searchTermRefeinRef.current.value}
    // &city=${this.cityRefeinRef.current.value}
    // &state=${this.stateRefeinRef.current.value}
    // &zipCode=${this.zipCodeRefeinRef.current.value}
    // &form990_amount_min=${this.form990_amount_minRefeinRef.current.value}
    // &form990_amount_max=${this.form990_amount_maxRefeinRef.current.value}
    // &latitude=${this.latitudeRefeinRef.current.value}
    // &longitude=${this.longitudeRefeinRef.current.value}
    // &distance=${this.distanceRefeinRef.current.value}
    // &category=${this.categoryRefeinRef.current.value}
    // &eligibl=${this.eligiblRefeinRef.current.value}
    // &rows=${this.rowsRefeinRef.current.value}
    // &start=${this.startRefeinRef.current.value}
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
      console.log('stringified', JSON.stringify(i))
      console.log('tryna get the one key lol', Object.keys(i)[0])
      if (i[Object.keys(i)[0]] !== null) searchArr.push(`&${Object.keys(i)[0]}=${i[Object.keys(i)[0]]}`)
    })
    
    
    // console.log('inputs is', inputs)
    // console.log('searchTermRef is', this.searchTermRef)
    // console.log('cityRef is', this.cityRef)
    // console.log('stateRef is', this.stateRef)
    // console.log('zipCodeRef is', this.zipCodeRef)
    // console.log('form990_amount_minRef is', this.form990_amount_minRef)
    // console.log('form990_amount_maxRef is', this.form990_amount_maxRef)
    // console.log('latitudeRef is', this.latitudeRef)
    // console.log('longitudeRef is', this.longitudeRef)
    // console.log('distanceRef is', this.distanceRef)
    // console.log('categoryRef is', this.categoryRef)
    // console.log('eligiblRef is', this.eligiblRef)
    // console.log('rowsRef is', this.rowsRef)
    // console.log('startRef is', this.startRef)
    // console.log('einRef.current.value boolean is', !!this.einRef.current.value)
    console.log('searchArr is', searchArr)
    const search = searchArr.join('')
    console.log('search is', search)
    this.props.getCenters(search)
    e.currentTarget.reset()
  }
  render() {
    // let centers = this.state.centers
    // console.log(centers)
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
              <div className="input-field col s4 offset-s4">
                <input type="number" name="ein" ref={this.einRef} placeholder="ein" />
                <input type="text" name="searchTerm" ref={this.searchTermRef} placeholder="searchTerm" />
                <input type="text" name="city" ref={this.cityRef} placeholder="city" />
                <input type="text" name="state" ref={this.stateRef} placeholder="state" />
                <input type="number" name="zipCode" ref={this.zipCodeRef} placeholder="zipCode" />
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
                <input type="number" name="distance" ref={this.distanceRef} placeholder="distance" />
                <input type="text" name="category" ref={this.categoryRef} placeholder="category" />
                <p>Eligibility:</p>
                <input type="radio" name="eligible" ref={this.eligiblRef} id="eligible1" value="1"/>
                <label for="eligible1">Yes</label>
                <input type="radio" name="eligible" ref={this.eligiblRef} id="eligible2" value="0" />
                <label for="eligible2">No</label>
                {/*2
                    These would prob be for us for pagination
                 */}
                {/* <input type="text" name="rows" ref={this.rowsRef} placeholder="rows" />
                <input type="text" name="start" ref={this.startRef} placeholder="start" /> */}
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