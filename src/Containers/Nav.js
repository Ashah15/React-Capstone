/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav header">
    <Link className="home-link" to="/">
      <h4 className=" nav-text"> Yummy Meals</h4>
    </Link>
  </div>
);

export default NavBar;