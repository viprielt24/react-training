import React from 'react';

import './style/_checkbox.scss'

const CheckBox = () => {
    return (
        <div>
            <label className="checkbox">One
                <input type="checkbox" name="checkbox"/>
                <span className="checkmark" />
            </label>
        </div>
    );
};

export default CheckBox;