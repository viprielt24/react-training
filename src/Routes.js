import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {RouterPath} from './common/constants/RouterPath';
import Home from './pages/Home';
import Button from './pages/Button';
import Select from './pages/Select';
import Modal from './pages/Modal';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={RouterPath.Home} exact component={Home}/>
                <Route path={RouterPath.Button} exact component={Button} />
                <Route path={RouterPath.Modal} exact components={Modal} />
                <Route path={RouterPath.Select} exact components={Select} />
            </Switch>
        </BrowserRouter>

    );
};

export default Routes;