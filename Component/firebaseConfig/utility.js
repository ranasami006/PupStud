import * as firebase from 'firebase'
import 'firebase/firestore';


export async function saveData(collection, doc, jsonObject) {
  const dbh = firebase.firestore();
    await dbh
    .collection(collection)
    .doc(doc)
    .set(jsonObject, { merge: true })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}