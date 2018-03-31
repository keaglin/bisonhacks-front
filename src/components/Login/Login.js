import React, {Component} from 'react'
import firebase from 'firebase'

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
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(function(result) {
            let token = result.credential.accessToken
            let secret = result.credential.secret
            let user = result.user
            console.log(user)
        })  
        .catch(function(error) {
            let errorCode = error.code
            let errorMessage = error.message
            let email = error.email
            let credential = error.credential
        })
    }

    handleTwitter = (e) => {
        let provider = new firebase.auth.TwitterAuthProvider()
        firebase.auth().signInWithPopup(provider).then(function(result) {
            let token = result.credential.accessToken
            let secret = result.credential.secret
            let user = result.user
            console.log(user)
        })  
        .catch(function(error) {
            let errorCode = error.code
            let errorMessage = error.message
            let email = error.email
            let credential = error.credential
        })
    }

    render () {
        return (
            <div className='login'>
                <h2>Login</h2>
                <input type='button' value='Login With Gmail' onClick={this.handleGmail} />
                <input type='button' value='Login With Twitter' onClick={this.handleTwitter} />
            </div>
        )
// make this LoginPage where users can press buttons and log in different way
// make new login where after user logged in using a method {login: true}
// make it once logged in header changes to no longer show signin/registration tabs
    }
}

export default Login
