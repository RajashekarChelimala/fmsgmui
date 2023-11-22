import React from 'react';
import Carousel from './Carousel';
import { Login } from './auth/login/Login';

const LoginContainer = () => {
  return (
    <section className="info_section">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 info_slider">
            <Carousel />
          </div>
          <Login />
        </div>
      </div>
    </section>
  );
};

export default LoginContainer;
