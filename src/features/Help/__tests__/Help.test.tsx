import React from 'react';
import {View, Text} from 'react-native';
import {render, screen} from '@testing-library/react-native';

describe('sample', () => {
  it('should test', () => {
    render(
      <View>
        <Text>hello Help screen</Text>
      </View>,
    );

    screen.getByText('hello Help screen');
  });
});
