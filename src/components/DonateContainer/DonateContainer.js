import React from 'react'


const DonateContainer = () => {

  createSearch = (e) => {
    // this is where we gonna get what we need from the form to compose the user-input part of the search link
    e.preventDefault()
    const search

    this.props.getCenters(search)
    e.currentTarget.reset()
  }
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
              <input placeholder="Who do you want to help?" id="search_term" type="text"/>
              <label htmlFor="search_term">Search</label>
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

export default DonateContainer