import React from 'react';
import { withRouter } from 'react-router-dom';
import './about-page.css';

const AboutPage = props => {
    const { strDrink, strDrinkThumb } = props.location.state;
    return (
        <div>
            <div className="about-wrapper">
                <p className="text">{strDrink}</p>
                <img className= "about-img" src={strDrinkThumb} ></img>
            </div>
            <BackButton />
        </div>
    )
}

export default AboutPage;

const BackButton = (withRouter(({ history }) => <button className = "undo-button" onClick={() => { history.goBack() }}>Back</button>))