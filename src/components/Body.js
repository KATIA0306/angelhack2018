import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Employment from './Employment';
import Schools from './Schools';

class Body extends React.Component {
    render() {
        return (
            <body>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/employment' component={Employment}/>
                    <Route path='/schools' component={Schools}/>
                </Switch>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </body>
        );
    }
}

export default Body;