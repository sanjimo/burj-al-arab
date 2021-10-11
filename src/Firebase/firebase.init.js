import firebaseConfig from "./firebase.config";
import "firebase/auth";
import { initializeApp } from "firebase/app";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;