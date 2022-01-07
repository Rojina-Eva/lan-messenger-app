import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './Screen/Welcome';
import App from './App';
import GetIp from './Screen/GetIp';

const Home = () => {
    return (
        <div>
            <Router>
            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route>
                <Route path="/messenger">
                    <App />
                </Route>
                <Route path="/getIp">
                    <GetIp />
                </Route>
            </Switch>
            </Router>
        </div>
    );
};

export default Home;