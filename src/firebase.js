// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMZ9n1nm7BHj1vLIuaAcsGJvPsMPgW1Ak",
  authDomain: "greenapsis-dc8d5.firebaseapp.com",
  projectId: "greenapsis-dc8d5",
  storageBucket: "greenapsis-dc8d5.appspot.com",
  messagingSenderId: "577770677063",
  appId: "1:577770677063:web:bd8c8ba9a383d70df2a262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const todosCol = collection(db,'products');

export default { todosCol, db };