import React from 'react';
import {render, screen} from '@testing-library/react-native';
import App from '../App';

describe('test', () => {
  it('should test', () => {
    render(<App />);

    // screen.debug();

    screen.getByText(/Read the docs/);
  });
});
