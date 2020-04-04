import React from 'react';
import './cocktail-details.css';

const CocktailDetails = ({ strDrink, strDrinkThumb, idDrink, toggle }) => {
  return (
    <div className="details-wrapper">
      <div className="first-section"> 
        <button className = "undo-button" onClick={
        () => toggle(null)}>Hide details</button>
        <img className="details-img" src={strDrinkThumb}></img></div>

      <div className="second-section"> <p className="text">{strDrink}</p>
        <p className="text">{idDrink}</p></div>


    </div>)
}

export default CocktailDetails;