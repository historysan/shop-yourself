import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBIujkqnG6WJ7vFoeZffH7jIO12Klr3ut0',
  authDomain: 'shop-yourself-db.firebaseapp.com',
  databaseURL: 'https://shop-yourself-db.firebaseio.com',
  projectId: 'shop-yourself-db',
  storageBucket: '',
  messagingSenderId: '17894012616',
  appId: '1:17894012616:web:d117b247eb8dad7149d7fd'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
