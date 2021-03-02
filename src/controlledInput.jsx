import React, { Component } from 'react';

export default class ControlledInput extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: '',
            message: '',
            violations: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = evt => {
        this.setState({ inputValue: evt.target.value });
    };

    handleClick = evt => {
        evt.preventDefault();
        console.log('The link was clicked.');

        fetch(
            'http://cpsc-api.herokuapp.com/api/search?q=' +
                this.state.inputValue
        )
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                this.setState({ violations: data.infractions });
            });
    };

    render() {
        let message;

        if (this.state.violations.length === 0) {
            message = 'No records';
        } else {
            message = (
                <ul>
                    {this.state.violations.map(item => {
                        return (
                            <li>
                                {item.date} - {item.violation} - {item.product}
                            </li>
                        );
                    })}
                </ul>
            );
        }

        return (
            <div>
                Input
                <input
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <br />
                <button onClick={this.handleClick}>Search</button>
                <br />
                {message}
            </div>
        );
    }
}
