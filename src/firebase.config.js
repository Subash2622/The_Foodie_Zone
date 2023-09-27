import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGNC8nV2VtBpprZYS7FcJQjiSgsN975K4",
  authDomain: "restaurantapp-f7dfa.firebaseapp.com",
  databaseURL: "https://restaurantapp-f7dfa-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-f7dfa",
  storageBucket: "restaurantapp-f7dfa.appspot.com",
  messagingSenderId: "902562757735",
  appId: "1:902562757735:web:13197394d1a476df3c68c2",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
