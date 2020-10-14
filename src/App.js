import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Users from './container/Users';
import asyncComponent from './hoc/asyncComponent';

const asyncPizza = asyncComponent(() => {
    return import('./container/Pizza.js');
});

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/" >Users</Link> |
                    <Link to="pizza" >Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={asyncPizza} />
                </div>
            </div>
        );
    }
}

export default App;