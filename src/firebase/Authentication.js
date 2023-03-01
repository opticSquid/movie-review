import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseConfig";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
