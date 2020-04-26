import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import CocktailPage from "./cocktail-page/cocktail-page";
import AboutPage from './about-page/about-page';
import Navbar from './navbar/navbar';
import Alcoholic from './cocktails/alcoholic';
import NonAlcoholic from './cocktails/non-alcoholic';
import OrdinaryDrink from './cocktails/ordinarydrink';
import CocktailGlass from './cocktails/cocktailglass';
import Champagne from './cocktails/champagne';


function App() {
  const NotFoundRedirect = () => <Redirect to='/home' />

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='*/cocktail/:cocktailId' component={AboutPage} />
          <Route path='/alcoholic' component={Alcoholic}></Route>
          <Route path='/non-alcoholic' component={NonAlcoholic}></Route>
          <Route path='/ordinarydrink' component={OrdinaryDrink}></Route>
          <Route path='/cocktailglass' component={CocktailGlass}></Route>
          <Route path='/champagne' component={Champagne}></Route>
          <Route path='/home' component={CocktailPage} />
          <Route component={NotFoundRedirect}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
