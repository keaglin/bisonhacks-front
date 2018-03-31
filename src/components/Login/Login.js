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
        let provider = new firebase.auth.GoogleAuthProvider()
        const gmailAuth = firebase.auth().signInWithPopup(provider) 
        .then(result => {
            let token = result.credential.accessToken
            let secret = result.credential.secret
            let user = result.user
            console.log(user)
        })  
        .catch(err => {
            let errCode = err.code
            let errMessage = err.message
            let email = err.email
            let credential = err.credential
        })
    }

    handleTwitter = (e) => {
        let provider = new firebase.auth.TwitterAuthProvider()
        const twitterAuth = firebase.auth().signInWithPopup(provider) 
        .then(result => {
            let token = result.credential.accessToken
            let secret = result.credential.secret
            let user = result.user
            console.log(user)
        })  
        .catch(err => {
            let errCode = err.code
            let errMessage = err.message
            let email = err.email
            let credential = err.credential
        })
    }

    render () {
        return (
            <div className='login'>
                <h2>Login</h2>
                <input className='gmail-button' type='button' value='Login With Gmail' onClick={this.handleGmail} />
                <input className='facebook-button' type='button' value='Login With Facebook' onClick={this.handleGmail} />
                <input className='twitter-button' type='button' value='Login With Twitter' onClick={this.handleTwitter} />
            </div>
        )
// make this LoginPage where users can press buttons and log in different way
// make new login where after user logged in using a method {login: true}
// make it once logged in header changes to no longer show signin/registration tabs
    }
}

export default Login
