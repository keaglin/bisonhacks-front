// import Rebase from 're-base'
// import firebase from 'firebase'
// import { Component } from '../../../Library/Caches/typescript/2.6/node_modules/@types/react';

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyBbSauK7SUE4OKD2j4e9xKQmqr6DjJTrrg",
//     authDomain: "bisonhacks-37a27.firebaseapp.com",
//     databaseURL: "https://bisonhacks-37a27.firebaseio.com", 
// })

//may not need this database
// const base = Rebase.createClass(firebaseApp.database())

//when component mounts it will grab the state and pass it in to the db

// componentDidMount() {
//     const {params} = this.props.match
//     this.ref= base.syncState(`${params.somekindofID}`, {
//         context: this,
//         state: 'whateverstateis'
//     })
// }

// when the user leave the page and the component unmounts it will unbind this.ref

// componentWillUnmount() {
//     base.removeBinding(this.ref)
// }

//put this in app handling state
// authHandler = async authData => {
//     const 
// }
// authenticate = provider => {
//     const authProvider = new firebase.auth.[`${provider}authProvider`]()
//     firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
// }



// export {firebaseApp}

// export default base
