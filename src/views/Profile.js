import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const loading = () => {
    return <h1>Loading...</h1>
  }

  const authProfile = () => {
    return (<h1>¡Hola, {user.name}!</h1>)
  }

  const verifyUser = () => {
    return user
    ? authProfile()
    : loading()
  }

  return ( 
    <React.Fragment>
      { verifyUser() }
      <div></div>
    </React.Fragment>
  );
}
 
export default Profile;