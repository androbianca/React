import React from 'react';
import './drink-type-card.css';
import {Link} from 'react-router-dom';

export default class DrinkTypeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    render() {
        return (
            <div className="cocktail-type-card">
               <Link to={this.props.route}>{this.props.name}</Link> 
            </div>
        );
    }
}