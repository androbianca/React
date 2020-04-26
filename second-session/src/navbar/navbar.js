import React from 'react';
import DrinkTypeCard from "./drink-type-card/drink-type-card";
import './navbar.css';

function Navbar() {
    const cocktailTypes = [
        {name:'Alcoholic', route:'alcoholic'}, 
        {name:'Non Alcoholic', route:'non-alcoholic'}, 
        {name:'Ordinary Drink', route:'ordinarydrink'},
        {name:'Cocktail glass', route:'cocktailglass'},
        {name: 'Champagne flute', route:'champagne'}];
  
        const cocktailList = cocktailTypes.map((cocktail, index) => <DrinkTypeCard name={cocktail.name} route={cocktail.route} key={index} />);

    return (
        <div className="navbar">
            <header className="cocktail-header">
                <h1>Cocktails</h1>
            </header>
            <div className="subitems">
                {cocktailList}
            </div>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search by name..."></input>
                        <button type="submit" className="searchButton">
                        </button>
                </div>
             </div>
         </div>
  );
}

export default Navbar;
