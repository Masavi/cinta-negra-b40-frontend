import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <h1 className="text-center">Bienvenido a <u>Maui App</u></h1>
      <div className="d-flex justify-content-center">
        <img
          src="perro.jpg"
          alt="Perro Salchicha" />
      </div>
    </React.Fragment>
  );
}
 
export default Home;