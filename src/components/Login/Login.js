import React, {Component} from 'react'
import firebase from 'firebase'
import './Login.css'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbSauK7SUE4OKD2j4e9xKQmqr6DjJTrrg",
    authDomain: "bisonhacks-37a27.firebaseapp.com",
    databaseURL: "https://bisonhacks-37a27.firebaseio.com", 
})

 // create event handlers that grab user email and password
 //create event handlers that handle clicks and either register or login users
class Login extends Component {

    state = {
        login: false
    }

    handleGmail = (e) => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const gmailAuth = firebase.auth().signInWithPopup(provider) 
        .then(result => {
            const token = result.credential.accessToken
            const secret = result.credential.secret
            const user = result.user
            console.log(user)
            // grab name information that I think is needed for user profile and create profile.
            // if profile is already created login with profile information displayed where it belongs
        })  
        .catch(err => {
            const errCode = err.code
            const errMessage = err.message
            const email = err.email
            const credential = err.credential
        })
    }

    handleTwitter = (e) => {
        const provider = new firebase.auth.TwitterAuthProvider()
        const twitterAuth = firebase.auth().signInWithPopup(provider) 
        .then(result => {
            const token = result.credential.accessToken
            const secret = result.credential.secret
            const user = result.user
            console.log(user)
        })  
        .catch(err => {
            const errCode = err.code
            const errMessage = err.message
            const email = err.email
            const credential = err.credential
        })
    }

    handleFacebook = (e) => {
        const provider = new firebase.auth.FacebookAuthProvider()
        const facebookAuth = firebase.auth().signInWithPopup(provider) 
        .then(result => {
            const token = result.credential.accessToken
            const secret = result.credential.secret
            const user = result.user
            console.log(user)
        })  
        .catch(err => {
            const errCode = err.code
            const errMessage = err.message
            const email = err.email
            const credential = err.credential
        })
    } 

    render () {
        return (
            <div className='login'>
                <h2>Login</h2>
                <input className='gmail-button' type='button' value='Login With Gmail' onClick={this.handleGmail} />
                <input className='facebook-button' type='button' value='Login With Facebook' onClick={this.handleFacebook} />
                <input className='twitter-button' type='button' value='Login With Twitter' onClick={this.handleTwitter} />
            </div>
        )

        // fb add a new app create app settings basics
// make this LoginPage where users can press buttons and log in different way
// make new login where after user logged in using a method {login: true}
// make it once logged in header changes to no longer show signin/registration tabs
    }
}

export default Login
