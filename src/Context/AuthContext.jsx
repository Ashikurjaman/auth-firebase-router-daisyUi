import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const UserContext = createContext(null);

const AuthContext = ({ children }) => {
    const [loading,setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password);
  };
  const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = ()=>{
    return signOut(auth);
  }
  useEffect(()=>{
    const unSubscriber = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
    })
    return(()=>{
        unSubscriber();
        
    })
  },[])

  const infoUser = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
  };

  return (
    <UserContext.Provider value={infoUser}>
        {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
