import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: JSON.stringify(
    import.meta.env.VITE_LCDOO_APP_FIREBASE_API_KEY
  ).replace(/"/g, ""),
  authDomain: JSON.stringify(
    import.meta.env.VITE_LCDOO_APP_FIREBASE_AUTH_DOMAIN
  ).replace(/"/g, ""),
  projectId: JSON.stringify(
    import.meta.env.VITE_LCDOO_APP_FIREBASE_PROJECT_ID
  ).replace(/"/g, ""),
  storageBucket: JSON.stringify(
    import.meta.env.VITE_LCDOO_APP_FIREBASE_STORAGE_BUCKET
  ).replace(/"/g, ""),
  messagingSenderId: JSON.stringify(
    import.meta.env.VITE_LCDOO_APP_FIREBASE_MESSAGING_SENDER_ID
  ).replace(/"/g, ""),
  appId: JSON.stringify(import.meta.env.VITE_LCDOO_APP_FIREBASE_APP_ID).replace(
    /"/g,
    ""
  ),
  measurementId: JSON.stringify(
    import.meta.env.VITE_LCDOO_APP_FIREBASE_MEASUREMENT_ID
  ).replace(/"/g, ""),
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
