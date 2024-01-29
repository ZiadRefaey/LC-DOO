// AuthContext.js

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
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
