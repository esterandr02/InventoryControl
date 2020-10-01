import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Inventory from '../pages/Inventory';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/new" component={Inventory}></Route>
    </Switch>
);

export default Routes;
