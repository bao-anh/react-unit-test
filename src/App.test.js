import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test App rendering correctly', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders with header', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>React app</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});
