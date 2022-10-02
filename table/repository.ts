import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
firebase.initializeApp({
  //config for firebase DB
  apiKey: 'AIzaSyDo5Zv2_Rthf_ZRB8iqa32wB_Rr7xb30og',
  authDomain: 'table-db-290a2.firebaseapp.com',
  databaseURL: 'https://table-db-290a2-default-rtdb.firebaseio.com',
  projectId: 'table-db-290a2',
  storageBucket: 'table-db-290a2.appspot.com',
  messagingSenderId: '769530881383',
  appId: '1:769530881383:web:13d77e1c9ff3ed49e73bc2',
  measurementId: 'G-PC5RJVQJG3',
});
const firestore = firebase.firestore(); //create firebase instance
let data = null;
firestore
  .collection('Table')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      data = doc.data();
    });
  }); //getting data from DB
export function getTableData(): Promise<string[]> {
  return Promise.resolve<string[]>(data);
}
