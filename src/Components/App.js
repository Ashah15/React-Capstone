/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import AllMeals from '../Containers/AllRecipes';
import MealDetails from '../Containers/ItemDetails';
import NavBar from '../Containers/Nav';
import AllCategories from '../Containers/Categories';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={AllCategories} exact />
      <Route path="/category/:category" component={AllMeals} />
      <Route path="/meal/:id" component={MealDetails} />
    </Switch>
  </div>
);

export default App;