import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const login = (user) => setUser(user);

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
