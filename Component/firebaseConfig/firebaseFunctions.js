import * as firebase from 'firebase'
//import 'firebase/firestore';
import { saveData,getData,saveInitialData } from "./utility";
import AsyncStorage from '@react-native-async-storage/async-storage';
export async function signIn(email, password) {
    let success = true;
    // connectFirebase();
    await firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(async user => {
        
        let userinfo = await getData('users', user.user.uid);
          if (userinfo) {
          console.log("Welcome pak",user.user.uid)
       
             AsyncStorage.setItem('Token', user.user.uid);
           } else {
          success = false;
          await firebase.auth().signOut();
          alert('Invalid User!');
        }
    
      })
      .catch(function(error) {
        success = false;
        alert(error.code + ': ' + error.message);
      });
    return success;
  }


  export async function signUp(
    firstname,
    lastname,
    email,
    password
  ) {
    let success = true;
    //connectFirebase();
      await firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        let Details = {
          id: user.user.uid,
          firstname: firstname,
          lastname: lastname,
          email: email,
          num_user: 0,
          rating: 0,
        };
        await saveData('users', user.user.uid, Details);
        await saveInitialData('chats', user.user.uid);
        alert('Thank you for your registration! Your account is now ready to use.');
      })
      .catch(function (error) {
        success = false;
        alert(error.code + ':: ' + error.message);
      });
    return success;
  }
  

  