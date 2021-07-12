import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var Config = {
    apiKey: "AIzaSyCWNCxvou3HGUQeURq50nC-4VjCbC4S-eU",
    authDomain: "teste-firebase-75c0d.firebaseapp.com",
    projectId: "teste-firebase-75c0d",
    storageBucket: "teste-firebase-75c0d.appspot.com",
    messagingSenderId: "438985964513",
    appId: "1:438985964513:web:c90571f321b2ae5e5370a0"
  };
  

  class fire{

    
    constructor(){

      firebase.initializeApp(Config);
      this.auth = firebase.auth();
      this.firestore = firebase.firestore();
    }
    async login(email, password){
      const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
        console.log(err);
      });
      return user;
    }
     
    async signin(email, password){
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err =>{
        console.log(err);
        
      });
      return user;
    }


    async logout(){
      await firebase.auth().signOut().catch(err =>{
        console.log(err);

      });
    }

      async getUserState(){
        return new Promise (resolve => {
            this.auth.onAuthStateChanged(resolve)

        });
      }
  }

export default new fire();