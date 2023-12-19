// App.js (or your main file)
import React from 'react';
import './App.css';
import './Home.css';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './Router/Navigator';
import Home from './component/Home';
import Home1 from './component/Home1';
import Home2 from './component/Home2';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
       <div>
        <BrowserRouter>
        <Navigator/>
        </BrowserRouter>
        </div> 
    );
}

export default App;
