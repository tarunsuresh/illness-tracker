import firebase from 'firebase';
require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCZglTD6JRg7a9KAQTCysX-hv1L2rrKuiw',
  authDomain: 'illness-tracker-5425e.firebaseapp.com',
  projectId: 'illness-tracker-5425e',
  storageBucket: 'illness-tracker-5425e.appspot.com',
  messagingSenderId: '787496364799',
  appId: '1:787496364799:web:b6d4f15c778e96327c7aca',
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();