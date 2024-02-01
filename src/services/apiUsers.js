import { collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot;
}
export async function getCurrentUser(id) {
  const docRef = doc(db, "users", id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    return docSnapshot.data();
  } else {
    return "error not found";
  }
}
export async function createUser(id, newUser) {
  try {
    await setDoc(doc(db, "users", id), {
      ...newUser,
      uid: id,
      createdAt: new Date(),
      dob: null,
      themePref: "null",
      pfp: null,
      address: null,
      lastLogin: new Date(),
      verified: false,
      reviews: [],
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(id, newUser) {
  try {
    const docRef = await setDoc(doc(db, "users", id), {
      ...newUser,
    });
    console.log(docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
