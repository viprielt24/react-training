import React, {useState} from 'react';

import './styles/_dropdown.scss';

const Dropdown = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false);
    const options = ['React', 'Vue', 'Angular']

    return (
        <div className="dropdown">
            <div className="dropdown__btn"
            onClick={(e) => setIsActive(!isActive)}
            >
                {selected}
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown__content">
                    {options.map((options) => (
                        <div
                            onClick={e => {
                                setSelected(options)
                                setIsActive(false)
                            }}
                            className="dropdown__item"
                        >
                            {options}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;