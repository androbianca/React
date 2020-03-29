import React from 'react';
import './card.css';
export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    render() {
        return (
            <div>
                <h1>Info form</h1>
                <div className="Card-container">
                    <Input type="text"
                        id="name"
                        label="Name:"
                        placeholder="Enter your name"
                        value={this.state.name}
                        onchange={newValue => this.setState({ name: newValue })} />
                    <p>Hello {this.state.name}</p>
                </div>
            </div>
        );
    }
}

function Input({
    label,
    onchange,
    ...rest}) {
    return (
        <div>
            <label>
                {label}
            </label>
            <input
               {...rest} 
                onChange={e => onchange(e.target.value)}
            />
        </div>
    );
}