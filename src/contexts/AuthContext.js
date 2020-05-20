import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  return (
    <AuthContext.Provider value={{ color:"blue" }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
