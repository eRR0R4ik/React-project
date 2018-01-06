import React, { Component } from 'react';
import $ from 'jquery'; 
// include Components dependencies
import Navbar from './Navbar';
import FirstScreen from './First_screen';
import Footer from './Footer';

// include other dependencies
import '../css/App.css';

class App extends Component {    
    render(props) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return (
            <div className="main-wrapper">
                <Navbar />
                <FirstScreen />
                <Footer />
            </div>
        );
    }
}

export default App;