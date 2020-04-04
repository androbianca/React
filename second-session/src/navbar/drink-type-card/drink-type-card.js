import React from 'react';
import './drink-type-card.css';

export default class DrinkTypeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    render() {
        return (
            <div className="cocktail-type-card">
                {this.props.name}
            </div>
        );
    }
}