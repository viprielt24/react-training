import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PageHome from './pages/Home/pageHome';
import PageButton from './pages/Button/pageButton';
import PageModal from './pages/Modal/pageModal';
import PageSelect from './pages/Select/pageSelect';

export const useRoutes = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <PageHome />
            </Route>
            <Route path="/button" exact>
                <PageButton />
            </Route>
            <Route path="/modal" exact>
                <PageModal />
            </Route>
            <Route path="/select" exact>
                <PageSelect />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}