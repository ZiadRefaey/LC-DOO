// AuthContext.js

import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [fireStoreUser, setFireStoreUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnapshot = await getDoc(docRef);

          if (docSnapshot.exists()) {
            setFireStoreUser(docSnapshot.data());
          } else {
            console.error("Error: User data not found");
          }
        } catch (error) {
          console.error("Error fetching user:", error.message);
        }
      } else {
        // Handle the case where user is not authenticated
        setFireStoreUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email, password) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      setError("");
    } catch (error) {
      //   toast.error(error);
      setIsLoading(false);
      console.log(error);
      setError(error);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");

      setIsLoading(false);
    } catch (error) {
      console.error("Login failed:", error.message);
      setIsLoading(false);
      setError(error);
    }
  };

  const logout = async () => {
    setIsLoading(true);

    try {
      await signOut(auth);
      setIsLoading(false);
      setError("");
    } catch (error) {
      console.error("Logout failed:", error.message);
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        isLoading,
        error,
        fireStoreUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
