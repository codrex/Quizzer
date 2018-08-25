import React from 'react';
import Button from '..';

describe('Button', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should perform an action when it is clicked', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Button handleClick={handleClick} />);
    wrapper.find('button').simulate('click');
    expect(handleClick).toBeCalled();
  });
});
