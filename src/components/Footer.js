import React, { Component } from 'react';
// import logo from '../images/logo.svg';
import '../css/Footer.css';

class Footer extends Component {
    render() {
      return (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-3">
                <i class="fa fa-copyright" aria-hidden="true"> 2018 HomeEverywhere. All rights reserved</i>
              </div>
              <div className="col-xs-6">
                <div className="social center">
                  <a href="#fb"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                  <a href="#tw"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                  <a href="#g+"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
                  <a href="#vk"><i class="fa fa-vk" aria-hidden="true"></i></a>
                </div>
              </div>
              <div className="col-xs-3">
              <div className="contacts">
                <i class="fa fa-phone" aria-hidden="true"> 800-2345-6789</i>
              </div>
              </div>
            </div>
          </div>
        </footer>
      );
    }
  }
  
export default Footer;
  