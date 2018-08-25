import React from 'react';
import StartScreen from '..';

describe('Start Screen', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<StartScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
