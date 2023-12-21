// App.js (or your main file)
import React from 'react';
import './App.css';
import './Home.css';
import'./component/signup.css';
import Nav from './component/Nav';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './Router/Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from './component/Signup';

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
