import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Components/Home';
import CocktailCategories from '../Components/CocktailCategories';
import MealCategories from '../Components/MealCategories';


const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/CocktailCategories' component={CocktailCategories}></Route>
      <Route exact path='/MealCategories' component={MealCategories}></Route>
    </Switch>
  );
}

export default Main;
