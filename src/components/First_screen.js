import React, { Component } from 'react';
import Card from './Card';
import List from './List';

// include other dependencies
import '../css/First_screen.css';
import data from '../data.json';

class FirstScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
          showlist: false,
          cardsLength: 4
      }
  }

  addMore = (e) => {
    this.setState({ cardsLength: this.state.cardsLength + 4 })
  };

  showRentalList = () => {
      this.setState({ showlist: true });
  };

  defaultFirstScreen() {
      let cardsLength = this.state.cardsLength;
      return (
        <div>
          <div className="bg-wr">
            <div className="container">
              <div className="jumbotron">
                <h1 className="large">Feel like Home, Everywhere!</h1>
                <p>Choose a rental from the world's best selection</p>
                <button onClick={ this.showRentalList } className="btn btn-primary btn-lg">Show more</button>
              </div>
            </div>
          </div>
          <div className="container">
          <div className="row">{
              data.map(function(item, index) {
                    if(index < cardsLength) {
                      return <Card key={item.key} name={item.name} about={item.about} 
                          phone={item.phone} email={item.email} img={index} 
                          greeting={item.greeting} />
                    } 
              })}</div>
          <div className="row center">
          <button className={ cardsLength === 12 ? 'hidden ' + 'btn btn-default' : 'btn btn-default' } 
          onClick={ this.addMore }>More<i className="fa fa-angle-double-down arrow-animation"></i></button>
          </div>
        </div>
      </div>
    );
  }

  rentalListScreen() {
      return (
        <div>
          <div className="bg-wr"></div>
          <div className="container">
            <div className="row"><List /></div>
          </div>
        </div>
    );
  }

  render() {
      if (!this.state.showlist) {
        return (this.defaultFirstScreen());
      } else {
        return (this.rentalListScreen());
      }
  }
}

export default FirstScreen;
