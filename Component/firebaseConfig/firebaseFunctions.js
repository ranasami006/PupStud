import * as firebase from 'firebase'
//import 'firebase/firestore';
import { saveData } from "./utility";
export async function signIn(email, password) {
    let success = true;
    // connectFirebase();
    await firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(async user => {
        console.log("Welcome")
    //     let userinfo = await getData('users', user.user.uid);
    //     var user1= auth().currentUser;
    //     if(user1.emailVerified){
    //     if (userinfo) {
    //       GlobalConst.UserInfo = userinfo;
    //       AsyncStorage.setItem('Token', user.user.uid);
    //       AsyncStorage.setItem('favPost', userinfo.fav);
    //       if (userinfo.imgurl) {
    //         AsyncStorage.setItem('user_imgurl', userinfo.imgurl);
    //       }
    //     } else {
    //       success = false;
    //       await firebase.auth().signOut();
    //       alert('Invalid User!');
    //     }
    //   }
    //   else{
    //     success = false;
    //     ToastAndroid.show("Please verify your email before sign in",ToastAndroid.LONG);
    //   }
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
        alert('Thank you for your registration! Your account is now ready to use.');
      })
      .catch(function (error) {
        success = false;
        alert(error.code + ':: ' + error.message);
      });
    return success;
  }
  

  