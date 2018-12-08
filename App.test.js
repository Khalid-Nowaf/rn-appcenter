import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe('Unit Test Smoke Test', () => {
  it('should run with no error', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})




