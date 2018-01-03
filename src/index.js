// include React dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// include Components dependencies
import Navbar from './components/Navbar';
import Card from './components/Card';
import List from './components/List';
import Filter from './components/Filter';
// import Wars from './components/StarWars';
import FirstScreen from './components/First_screen';

// include other dependencies
import './css/index.css';
import data from './data.json';
import registerServiceWorker from './registerServiceWorker';


const root = document.getElementById('root');

ReactDOM.render(
<div className="main-wrapper">
    <div className="bg-wr">
        <Navbar />
        <div className="container">
        <FirstScreen />
        </div>
    </div>
    <div className="container">
        <div className="row">{
                    data.map(function(item) {
                        return <Card key={item.key} name={item.name} about={item.about} 
                                    phone={item.phone} email={item.email} img={item.img} 
                                    greeting={item.greeting} />
                    })
                }
        </div>
        <div className="row"><Filter /></div>
        <div className="row"><List /></div>
        {/* <div className="row"><Wars /></div> */}
    </div>
    
    
</div>, root);
registerServiceWorker();