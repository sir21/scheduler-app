import {render} from '@testing-library/react-native';
import React from 'react';
import App from '../App';

describe('App', () => {
  it('should renders correctly', () => {
    const page = render(<App />);
    expect(page).toBeDefined();
  });
});