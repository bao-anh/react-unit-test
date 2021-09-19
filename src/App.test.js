import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test App rendering correctly', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
