import {
  collection,
  getDocs,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

//fetch all users
export async function getUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot;
}

//get the current user given the uid
export async function getCurrentUser(id) {
  const docRef = doc(db, "users", id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    return docSnapshot.data();
  } else {
    return "error not found";
  }
}
//Function to create users
export async function createUser(id, newUser) {
  //set User data to the from the passed in new user object then set some default data
  try {
    await setDoc(doc(db, "users", id), {
      ...newUser,
      uid: id,
      createdAt: new Date(),
      dob: null,
      themePref: "null",
      pfp: null,
      lastLogin: new Date(),
      verified: false,
      reviews: [],
    });
  } catch (error) {
    console.log(error);
  }
}
//update fields of the user that matches the id with the fields passed in newUser
export async function updateUser(id, newUser) {
  try {
    await updateDoc(doc(db, "users", id), {
      ...newUser,
    });
    const updatedDocSnapshot = await getDoc(doc(db, "users", id));
    const updatedUser = updatedDocSnapshot.data();

    return updatedUser;
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}
