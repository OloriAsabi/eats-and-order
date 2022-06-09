import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgSBQBvDh-Sgak35A16y8eUSVi1MhRfQI",
  authDomain: "eats-351810.firebaseapp.com",
  projectId: "eats-351810",
  storageBucket: "eats-351810.appspot.com",
  messagingSenderId: "629375757636",
  appId: "1:629375757636:web:fc4e004e4a5b6c91c0bb11",
  measurementId: "G-LY9QET2F81"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;

