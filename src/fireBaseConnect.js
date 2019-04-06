import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD4qSP95ywvM6wdGwD37CikPnj2EBHbcZ0",
    authDomain: "react-redux-9d165.firebaseapp.com",
    databaseURL: "https://react-redux-9d165.firebaseio.com",
    projectId: "react-redux-9d165",
    storageBucket: "react-redux-9d165.appspot.com",
    messagingSenderId: "899996225313"
  };
  // firebase.initializeApp(config);
  
  firebase.initializeApp(config);
  export const fireBaseConnect = firebase.database().ref('dataForNote');
  // export default fireBaseConnect;
  // All data of firebase will saving called is data Snapshot/
  



  // fireBaseConnect.set({
  //   "id" : 1,
  //   "noteContent" : "xxxxxxxxxxxxxxxx",
  //   "title" : "yyyyyyyyyyyyyyyyyyyy"
  // });
  // data.once('value').then(function(snapchot){
  //   console.log(snapchot.val());
  // });
