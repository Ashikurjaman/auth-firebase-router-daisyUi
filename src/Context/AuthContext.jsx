import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import auth from "../Firebase/Firebase";

export const UserContext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password);
  };
  const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }
  const infoUser = {
    user,
    createUser,
    signIn,
  };

  return (
    <UserContext.Provider value={infoUser}>
        {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
