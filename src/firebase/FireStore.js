import { app } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  orderBy,
  startAt,
  limit,
} from "firebase/firestore";
const db = getFirestore(app);

const write = async (data) => {
  try {
    console.log("data to write: ", data);
    const docRef = await setDoc(doc(db, "movies", data.rank), data);
    console.log("Document added:", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const readAll = async () => {
  const querySnapshot = await getDocs(collection(db, "movies"));
  const data = [];
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    data.push(doc.data());
  });
  return data;
};
const readPaginated = async (start) => {
  const moviesRef = collection(db, "movies");
  const q = query(moviesRef, orderBy("ranking"), startAt(start), limit(10));
  const querySnapshot = await getDocs(q);
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};
export { write, readAll, readPaginated };
