import React, { Component } from 'react';
import $ from 'jquery'; 
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

  resetState() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.setState ({booking: false, details: false});
  };

  defaultTemplate = (e) => {
        let divStyle = {
          minHeight: 170
        };
        return (
          <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="thumbnail relative-element">
              <div style={divStyle} className={"img-" + this.props.img}></div>
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
  };

  detailsTemplate = (e) => {
        let divStyle = {
          minHeight: 400
        };
        return (
          <div className="col-xs-12">
          <div className="thumbnail relative-element">
              <div style={divStyle} className={"img-" + this.props.img}></div>
              <div className="caption">
                <h1 className="center">{this.props.name}</h1>
                <p className="about">{this.props.about}</p>
                <b>{this.props.phone}</b>
                <br />
                <i>{this.props.email}</i>
                <br />
                <p className="btn-wrapper">
                  <button href="" onClick={this.resetState.bind(this)} className="btn btn-default"><i className="fa fa-chevron-left"></i> Back</button>
                </p>
              </div>
          </div>
      </div>
    );
  };

  bookingTemplate = () => {
      let divStyle = {
        height: 300
      };
      return (
        <div className="col-xs-12">
          <div className="thumbnail relative-element">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="caption">
                <h1 className="center">{this.props.name}</h1>
                <div id="carousel-example-generic" className="carousel slide ml-2-5" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                      <div className="item active">
                        <div style={divStyle} className="img-0"></div>
                        <div className="carousel-caption"></div>
                      </div>
                      <div className="item">
                        <div style={divStyle} className="img-1"></div>
                        <div className="carousel-caption"></div>
                      </div>
                      <div className="item">
                        <div style={divStyle} className="img-2"></div>
                        <div className="carousel-caption"></div>
                      </div>
                    </div>

                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                </div>
                <p className="btn-wrapper ml-2-5">
                  <button href="" onClick={this.resetState.bind(this)} className="btn btn-default"><i className="fa fa-chevron-left"></i> Back</button>
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
            <form className="booking-form">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label for="exampleInputFile">File input</label>
                <input type="file" id="exampleInputFile" />
                <p className="help-block">Example block-level help text here.</p>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            </div>
            </div>
          </div>
      </div>)
  };

  render() {
    if (this.state.details) {
      return this.detailsTemplate();
    } else if (this.state.booking) {
      return this.bookingTemplate();
    } else {
      return this.defaultTemplate();
    }
    
  }
}

Card.defaultProps = {
  phone: "- phone is not available"
}

export default Card;