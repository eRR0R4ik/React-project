import React, { Component } from 'react';
import '../css/List.css';
import ListRow from '../components/List_row'
import userData from '../data.json';


class List extends Component {
    render() {
        let i = 1;
        return (
            <div className="panel panel-default relative-element">
                <div className="panel-heading">Panel heading</div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Compare</th>
                            <th className="msg">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    { userData.map(el => <ListRow key={el.key} name={el.name} 
                    lastname={el.lastname} username={el.username}>{i++}</ListRow>) }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;