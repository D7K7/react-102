import React, { Component } from 'react';

export default class Lister extends Component {
    constructor() {
        super();

        this.state = {
            foods: ['b', 'd', 'cats'],

            people: [
                { id: 1, name: 'Bob', age: '35' },
                { id: 2, name: 'Bobby', age: '15' }
            ]
        };
    }

    render() {
        return (
            <div className="col-sm-4">
                <span className="badge badge-secondary">Test!!</span>

                <ul>
                    {this.state.foods.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>

                <ol>
                    {this.state.people.map(item => {
                        return (
                            <li key={item.id}>
                                {' '}
                                {item.name} - {item.age}{' '}
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}
