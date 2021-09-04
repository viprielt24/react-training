import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import './style/_navbar.scss';

const Navbar = () => {
    const history = useHistory();
    return(
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/button">Button</NavLink>
                    </li>
                    <li>
                        <NavLink to="/select">Select</NavLink>
                    </li>
                    <li>
                        <NavLink to="/modal">Modal</NavLink>
                    </li>
                    <button onClick={() => history.goBack()}>Go back</button>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar;