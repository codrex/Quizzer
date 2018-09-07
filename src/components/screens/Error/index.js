import React, { PureComponent } from 'react';
import { node } from 'prop-types';

class Error extends PureComponent {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <div>An Error Occurred</div>;
    }
    return children;
  }
}

Error.propTypes = {
  children: node.isRequired,
};

export default Error;
