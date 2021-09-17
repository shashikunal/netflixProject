import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
export let AuthContext = createContext();

let AuthProvider = ({ children }) => {
  let [USER, setUSER] = useState(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user.emailVerified === true) {
        console.log("Auth user");
        setUSER(user);
      } else {
        setUSER(null);
        console.log(null);
      }
    });
  });

  return <AuthContext.Provider value={USER}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
