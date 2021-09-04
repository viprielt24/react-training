import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Button from '../../pages/Button/Button';
import Select from '../../pages/Select/Select';
import Modal from '../../pages/Modal/Modal';

import './style/_header.scss';

const Header = () => {
    return(
        <div className="header">
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                        <li>
                            <Link to="/select">Select</Link>
                        </li>
                        <li>
                            <Link to="/modal">Modal</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/button" component={Button} />
                    <Route exact path="/select" component={Select} />
                    <Route exact path="/modal" component={Modal} />
                </Switch>
            </Router>
        </div>
    )
}

export default Header;