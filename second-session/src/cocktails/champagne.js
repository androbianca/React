import React from 'react';
import axios from 'axios';
import CategoryCard from '../cocktail-page/category-section/cocktail-card/cocktail-card';

export default class Champagne extends React.Component {
    constructor() {
        super();

        this.state = {
            cocktails: [],
        };
    };

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute')
            .then(res => {
                this.setState({ cocktails: res.data.drinks });
            })
    }

    render() {
        const list = this.state.cocktails.map((cocktail, index) =>
            <CategoryCard {...cocktail} key={index} toggle={this.toggle} />)

        return (
            <ul className="cocktail-list">{list}</ul>
        );
    }
}