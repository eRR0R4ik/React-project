import React, { Component } from 'react';

class Wars extends Component {
    constructor() {
        super();
        this.state = { items: [] }
    };

    componentWillMount() {
        fetch( 'https://swapi.co/api/people/?format=json' )
        .then( response => response.json() )
        .then( ({results: items}) => this.setState({items}))
    }
    
    render() {
        let items = this.state.items;
        console.error(items);
        return (
            <div>
                {items.map(item => <h4>{item.name}</h4>)}
                <hr />
                <h3 className="outPut">{ this.state.items }</h3>
            </div>
        );
    }
}

export default Wars;