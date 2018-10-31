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
  eligibleRef = React.createRef()
  rowsRef = React.createRef()
  startRef = React.createRef()

  createSearch = (e) => {
    // this is where we gonna get what we need from the form to compose the user-input part of the search link
    e.preventDefault()
    const search = `
      &ein=${this.einRef.value.value}
      &searchTerm=${this.searchTermRef.value.value}
      &city=${this.cityRef.value.value}
      &state=${this.stateRef.value.value}
      &zipCode=${this.zipCodeRef.value.value}
      &form990_amount_min=${this.form990_amount_minRef.value.value}
      &form990_amount_max=${this.form990_amount_maxRef.value.value}
      &latitude=${this.latitudeRef.value.value}
      &longitude=${this.longitudeRef.value.value}
      &distance=${this.distanceRef.value.value}
      &category=${this.categoryRef.value.value}
      &eligibl=${this.eligiblRef.value.value}
      &rows=${this.rowsRef.value.value}
      &start=${this.startRef.value.value}
    `
    console.log('search is', search)
    // this.props.getCenters(search)
    // e.currentTarget.reset()
  }
  render() {
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
          <form className="col s12" onSubmit={this.createSearch}>
            <div className="row">
              <div className="input-field col s4 offset-s4">
                <input type="text" name="ein" ref={this.einRef} placeholder="ein" />
                <input type="text" name="searchTerm" ref={this.searchTermRef} placeholder="searchTerm" />
                <input type="text" name="city" ref={this.cityRef} placeholder="city" />
                <input type="text" name="state" ref={this.stateRef} placeholder="state" />
                <input type="text" name="zipCode" ref={this.zipCodeRef} placeholder="zipCode" />
                <input type="text" name="form990_amount_min" ref={this.form990_amount_minRef} placeholder="form990_amount_min" />
                <input type="text" name="form990_amount_max" ref={this.form990_amount_maxRef} placeholder="form990_amount_max" />
                <input type="text" name="latitude" ref={this.latitudeRef} placeholder="latitude" />
                <input type="text" name="longitude" ref={this.longitudeRef} placeholder="longitude" />
                <input type="text" name="distance" ref={this.distanceRef} placeholder="distance" />
                <input type="text" name="category" ref={this.categoryRef} placeholder="category" />
                <input type="text" name="eligible" ref={this.eligibleRef} placeholder="eligible" />
                <input type="text" name="rows" ref={this.rowsRef} placeholder="rows" />
                <input type="text" name="star" ref={this.starRef} placeholder="star" />
                <button type="submit">Search</button>
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