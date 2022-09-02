import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd-BtqLdKQbM_Y_ItVDhwR4gnceMcaRBY",
  authDomain: "kitchenhelper-68689.firebaseapp.com",
  projectId: "kitchenhelper-68689",
  storageBucket: "kitchenhelper-68689.appspot.com",
  messagingSenderId: "81620139425",
  appId: "1:81620139425:web:1554d0683eb2f370509fe0",
  measurementId: "G-92J6ZWQQC6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;