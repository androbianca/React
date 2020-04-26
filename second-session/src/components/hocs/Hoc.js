import React, { Component } from 'react';

export default function Hoc(HocComponent) {
    return class extends Component {
        constructor(props){
            super(props)
        }

        render() {
            return (
                <div>
                    <h2>
                        This is my Hoc
                    </h2>
                    <HocComponent {...this.props}></HocComponent>
                </div>
            )
        }
    }
}