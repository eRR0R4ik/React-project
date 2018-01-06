// include React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// include other dependencies
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';


const root = document.getElementById('root');

ReactDOM.render(<App />, root);
registerServiceWorker();