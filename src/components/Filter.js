import React, { Component } from 'react';
import '../css/Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    };

    handleChange = (e) => {
        this.setState({value: e.target.value})  // this.refs.a.value
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input ref="a" type="text" className="form-control" placeholder="Search for..." 
                    onChange={ this.handleChange } />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button">Go!</button>
                    </span>
                </div>
                <hr />
                <h3 className="outPut">{ this.state.value }</h3>
            </div>
        );
    }
}

export default Filter;