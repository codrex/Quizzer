import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { string, objectOf, shape } from 'prop-types';
import './animated-icon.scss';

function AnimatedIcon({
  className, style, icon, size,
}) {
  return (
    <FontAwesomeIcon
      icon={icons[icon]}
      className={`animated-icon ${className}`}
      style={style}
      size={size}
    />
  );
}

AnimatedIcon.propTypes = {
  className: string,
  style: objectOf(shape),
  icon: string,
  size: string,
};

AnimatedIcon.defaultProps = {
  className: '',
  style: {},
  icon: 'faBasketballBall',
  size: '3x',
};
export default AnimatedIcon;
