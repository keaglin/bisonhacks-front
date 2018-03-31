import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbSauK7SUE4OKD2j4e9xKQmqr6DjJTrrg",
    authDomain: "bisonhacks-37a27.firebaseapp.com",
    databaseURL: "https://bisonhacks-37a27.firebaseio.com", 
})

//may not need this database
const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp}

export default base
