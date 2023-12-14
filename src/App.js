// App.js (or your main file)
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'; // Adjust the path accordingly
import Signup from './Signup'; // Adjust the path accordingly

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/Login" exact component={Login} />
                <Route path="/Signup" exact component={Signup} />
                {/* Add more routes if needed */}
            </Switch>
        </Router>
    );
}

export default App;
