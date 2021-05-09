import { createContext, useState, useEffect, useContext } from "react";
import { firebaseAuth } from "./firebase/config";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      if (user) setUser(user);
      else setUser(false);
    });
    return () => unsubscribe();
  }, []);

  const signIn = (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        let { user } = await firebaseAuth.signInWithEmailAndPassword(
          email,
          password
        );
        setUser(user);
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  };
  return (
    <authContext.Provider value={{ user, signIn }}>
      {children}
    </authContext.Provider>
  );
};
