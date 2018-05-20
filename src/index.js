//MAIN 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //globally 

import App from './App';
import registerServiceWorker from './registerServiceWorker'; //cache and let app work offline

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
