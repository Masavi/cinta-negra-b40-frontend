import React, { useContext } from 'react';
import UserForm from '../components/UserForm';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  // Así manejarias la protección de rutas según el rol del usuario
  // if (!isAuth && user.role !== 'admin') return ( <Redirect to="/login" /> )

  const loading = () => {
    return <h1>Loading...</h1>
  }

  const authProfile = () => {
    return (
      <React.Fragment>
        <h1>¡Hola, {user.name}!</h1>
        <UserForm user={user} />
      </React.Fragment>
    )
  }

  const verifyUser = () => {
    return user
    ? authProfile()
    : loading()
  }

  return ( 
    <React.Fragment>
      { verifyUser() }
    </React.Fragment>
  );
}
 
export default Profile;