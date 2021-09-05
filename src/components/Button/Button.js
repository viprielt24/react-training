import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles/_button.scss';

const Button = ({children, onClick, className, disabled, active, ...attrs}) => {
    const classes = classNames(
        'btn',
        className,
        { active }
    )

    const onClickAction = e => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClickAction(e);
        }
    }

    const Tag = attrs.href ? 'a' : 'button';

    return (
        <Tag
            className={classes}
            disabled={disabled}
            onClick={onClickAction}
            {...attrs}
        >
            {children}
        </Tag>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false
}

export default Button;