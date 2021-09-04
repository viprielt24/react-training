import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Button from './pages/Button/Button';
import Modal from './pages/Modal/Modal';
import Select from './pages/Select/Select';

export const useRoutes = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/button" exact>
                <Button />
            </Route>
            <Route path="/modal" exact>
                <Modal />
            </Route>
            <Route path="/select" exact>
                <Select />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}