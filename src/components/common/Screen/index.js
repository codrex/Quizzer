import React, { PureComponent } from 'react';
import {
  node, string, objectOf, shape, arrayOf,
} from 'prop-types';
import AnimatedIcon from '../AnimatedIcon';
import './screen.scss';

class Screen extends PureComponent {
  renderIcons(className = 'screen__icons') {
    const { icons } = this.props;
    return icons.map(icon => <AnimatedIcon icon={icon} className={className} />);
  }

  render() {
    const {
      children, className, style, bgColor,
    } = this.props;
    return (
      <div className={`screen ${className}`} style={{ ...style, backgroundColor: bgColor }}>
        {this.renderIcons()}
        {this.renderIcons('screen__icons-small')}
        {children}
      </div>
    );
  }
}

Screen.propTypes = {
  children: node.isRequired,
  className: string,
  style: objectOf(shape),
  icons: arrayOf(string),
  bgColor: string,
};

Screen.defaultProps = {
  className: '',
  style: {},
  icons: [],
  bgColor: undefined,
};
export default Screen;
