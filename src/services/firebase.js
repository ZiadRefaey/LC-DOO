import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
dotenv.config({ path: "../../.env" });
const firebaseConfig = {
  apiKey: JSON.stringify(import.meta.env.VITE_LCDOO_APP_FIREBASE_API_KEY),
  authDomain: JSON.stringify(
    import.meta.env.VITE_LCDOO_APP_FIREBASE_AUTH_DOMAIN
  ),
  projectId: JSON.stringify(import.meta.env.VITE_LCDOO_APP_FIREBASE_PROJECT_ID),
  storageBucket: JSON.stringify(
    import.meta.env.VITE_LCDOO_APP_FIREBASE_STORAGE_BUCKET
  ),
  messagingSenderId: JSON.stringify(
    import.meta.env.VITE_LCDOO_APP_FIREBASE_MESSAGING_SENDER_ID
  ),
  appId: JSON.stringify(import.meta.env.VITE_LCDOO_APP_FIREBASE_APP_ID),
  measurementId: JSON.stringify(
    import.meta.env.VITE_LCDOO_APP_FIREBASE_MEASUREMENT_ID
  ),
};
export const app = initializeApp(firebaseConfig);
