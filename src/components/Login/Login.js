import React from 'react'
// import PropTypes from 'prop-types'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbSauK7SUE4OKD2j4e9xKQmqr6DjJTrrg",
    authDomain: "bisonhacks-37a27.firebaseapp.com",
    databaseURL: "https://bisonhacks-37a27.firebaseio.com", 
})
var provider = new firebase.auth.TwitterAuthProvider()

 // create event handlers that grab user email and password
 //create event handlers that handle clicks and either register or login users
const Login = props => {
    // <div className='login'>
    //     <h2>Login</h2>
    //     <button className='gmail' onClick={() => props.authenticate('Gmail')}>
    //         Login With Gmail
    //     </button>
    //     <button className='email' onClick={() => props.authenticate('Email')}>
    //         Login With Email
    //     </button>
    // </div>
    
    // var provider = new firebase.auth.TwitterAuthProvider()
    // <div>
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = result.credential.accessToken;
        var secret = result.credential.secret;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      })
    // </div>
    return (
        <div></div>
    )
}

// Login.propTypes = {
//     authenticate: PropType.func.isRequired
// }

export default Login
