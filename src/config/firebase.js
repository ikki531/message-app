import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";

const firebaseConfig = {
  // 各人の認証情報を記述
  apiKey: "AIzaSyD7FmonQ7SE6D75Bwrpo3UMI4BJSu4DJnc",
  authDomain: "talkroom-6f01c.firebaseapp.com",
  projectId: "talkroom-6f01c",
  storageBucket: "talkroom-6f01c.appspot.com",
  messagingSenderId: "541490135250",
  appId: "1:541490135250:web:fd5f8217c17a2d96b9ad0b",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
