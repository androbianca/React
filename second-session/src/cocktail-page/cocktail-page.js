import React from 'react';
import CategorySection from './category-section/category-section';
import './cocktail-page.css';

function CocktailPage() {
  const urls = [
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic',
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass',
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute'
  ]
  const cocktailUrls = urls.map((url, index) => <CategorySection url={url} key={index} />)

  return (
    <div>
        {cocktailUrls}
    </div>
  );
}

export default CocktailPage;
