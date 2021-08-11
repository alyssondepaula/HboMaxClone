import React, { createContext, useState, useContext, useEffect } from "react";


const AuthContext = createContext();

export default function AuthProvider({ children }) {

  const [logged, setLogged] = useState(false);



  const signIn = () =>  {
    return false;
  }


  async function signOut() {
    
    
  }

  return (
    <AuthContext.Provider
      value={{
        logged,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext must be used within a AuthProvider");
  return context;
}