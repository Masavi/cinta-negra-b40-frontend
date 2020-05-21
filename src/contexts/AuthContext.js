import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import decode from 'jwt-decode';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const history = useHistory();
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Si usamos useEffect sin el segundo argumento de arreglo,
  // esto se ejecuta cada vez que se renderice nuestro component
  // Equivalente a componenteDidUpdate
  // useEffect(() => console.log('use Effect!!!!'));

  // Si quiero que solo se ejecute useEffect una sola vez, 
  // y que esa vez sea cuando se renderiza por primera vez,
  // usamos el segundo argumento del arreglo vacío
  // Equivalente a componentDidMount
  useEffect(() => { 
    const encodedToken = localStorage.getItem('token');
    if (encodedToken) {
      setAuth(true);
      const decodedToken = decode(encodedToken);
      setToken(encodedToken);
      setUser(decodedToken);
    }
  }, [ ]);

  const setTokenAndLogin = (token) => {
    localStorage.setItem('token', token);
    setAuth(true);
    return history.push('/');
  }

  const removeToken = () => {
    localStorage.removeItem('token');
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ 
      isAuth, user, token, setTokenAndLogin, removeToken,
    }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
