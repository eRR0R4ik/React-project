import React, { Component } from 'react';
import '../css/List_row.css';


class List_row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            status: "Not checked"
        }
    }
    
    setCheck = (e) => {
        this.setState({ checked: !this.state.checked, 
            status: !this.state.checked ? "Checked" : "Not checked" })
    }

    render(props) {
        return (
            <tr>
                <th scope="row">{this.props.children}</th>
                <td>{ this.props.name }</td>
                <td>{ this.props.lastname }</td>
                <td>{ this.props.username }</td>
                <td>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" onChange={ this.setCheck }
                         defaultChecked={ this.state.checked }/>
                        </label>
                    </div>
                </td>
                <td>
                    <div className="msg">{ this.state.status }</div>
                </td>
            </tr>
        );
    }
}

export default List_row;