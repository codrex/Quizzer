/* eslint-disable react/button-has-type */
import React from 'react';
import {
  string, oneOf, func, objectOf, shape,
} from 'prop-types';
import AnimatedIcon from '../AnimatedIcon';
import './button.scss';

function Button({
  text, type, handleClick, className, icon, style,
}) {
  const withIcon = icon ? 'btn--with-icon' : '';
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`btn ${className} ${withIcon}`}
      style={style}
    >
      {icon && <AnimatedIcon className="btn__icon" icon={icon} />}
      {text && <span>{text}</span>}
    </button>
  );
}

Button.propTypes = {
  type: oneOf(['reset', 'submit', 'button']),
  text: string,
  handleClick: func,
  className: string,
  icon: string,
  style: objectOf(shape),
};

Button.defaultProps = {
  type: 'button',
  text: '',
  handleClick: () => {},
  className: '',
  icon: '',
  style: {},
};

export default Button;
