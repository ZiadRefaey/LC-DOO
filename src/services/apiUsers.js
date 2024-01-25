import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
export async function getUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot;
}
