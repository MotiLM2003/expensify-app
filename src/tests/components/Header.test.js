import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
test('should render Header correctly', () => {
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();

  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
