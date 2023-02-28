import { app } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
const db = getFirestore(app);

const write = async (data) => {
  try {
    const docRef = await setDoc(doc(db, "movies", data.rank), data);
    console.log("Document added with id:", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const readAll = async () => {
  const querySnapshot = await getDocs(collection(db, "movies"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    return doc.data();
  });
};
export { write, readAll };
