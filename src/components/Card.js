import React, { Component } from 'react';
import '../css/Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: false,
      details: false,
    };
  };
  booking = (e) => { 
      this.setState({booking: true});
  };
    
  details = (e) => {
    this.setState ({details: true});
  };

  render() {
    let divStyle = {
      minHeight: 170
    };
    
    return (
            <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="thumbnail relative-element">
                <img style={divStyle} src={this.props.img} alt="" />
                <div className="caption">
                  <h3>{this.props.name}</h3>
                  <p className="about">{this.props.about}</p>
                  <b>{this.props.phone}</b>
                  <br />
                  <i>{this.props.email}</i>
                  <br />
                  <p className="btn-wrapper">
                    <button href="" onClick={this.booking} className="btn btn-primary">Booking</button>&nbsp; 
                    <button href="" onClick={this.details} className="btn btn-default">Details</button>
                  </p>
                </div>
            </div>
        </div>
    );
  }
}

Card.defaultProps = {
  phone: "- phone is not available"
}

export default Card;