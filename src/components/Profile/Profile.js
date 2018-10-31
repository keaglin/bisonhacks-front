import React, {Component} from 'react'
import './Profile.css'

class Profile extends Component {
    // may need to have state updated from login component
    state = {
        login: true
    }

    constructor (props) {
        // grab userName, name, email, location, age, avi
    }

    displayProfile = (e) => {
        //show user their Profile information
    }

    render () {
        return (
            //users click on user name to see user information
            <div className='profile'>
                <h3><input className='userName' type='button' value={this.userName} onClick={this.displayProfile}/></h3>
            </div>
        )
    }
}

export default Profiles
