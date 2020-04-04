import React from 'react';
import './category-section.css';
import axios from 'axios';
import CategoryCard from './cocktail-card/cocktail-card';
import CocktailDetails from './cocktail-details/cocktail-details';

export default class CategorySection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cocktails: [],
      displayDetails: false,
      selectedDrink: ''
    };
  };

  toggle = (drink) => {
    this.setState({ displayDetails: !this.state.displayDetails });
    this.setState({ selectedDrink: drink });
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ cocktails: res.data.drinks });
      })
  }

  render() {
    const list = this.state.cocktails.slice(0, 4).map((cocktail, index) => 
    <CategoryCard {...cocktail} key={index} toggle={this.toggle}/>)

    return !this.state.displayDetails 
    ? (
      <div><hr/>
      <ul className="category-wrapper">{list}</ul></div>
    ) 
    : <CocktailDetails {...this.state.selectedDrink} toggle={this.toggle} />
  }
}
