import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import CocktailPage from "./cocktail-page/cocktail-page";
import AboutPage from './about-page/about-page';
import Navbar from './navbar/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={CocktailPage} />
        <Route path='/about' component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
