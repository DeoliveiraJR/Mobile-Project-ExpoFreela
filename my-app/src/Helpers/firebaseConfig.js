// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from '@firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASUl6YMkQsIRADjbZqQxTTZQjis1WCurA",
  authDomain: "testing-c9786.firebaseapp.com",
  projectId: "testing-c9786",
  storageBucket: "testing-c9786.appspot.com",
  messagingSenderId: "241327384419",
  appId: "1:241327384419:web:34ee1e7e3dfc6375b39556"
};

// Initialize FirNebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const firebaseAuth = getAuth(app)

// const [users, setUsers] = useState([]);
//  const usersCollectionRef = collection(db,"users");
  
// useEffect(() => {
// const getUsers = async (users) => {
// recupera a collection do firebase:
// const data = await getDocs(usersCollectionRef)
// console.log(data)
// adiciona ao state:
// setUsers(data.docs.map((doc) => ({
// ...doc.data(), id: doc.id
// })));
// }
// }, [])
