import React from 'react';
import AnimatedIcon from '..';


describe('Animated icon component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AnimatedIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
