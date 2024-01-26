import React from 'react';
import {View, Text} from 'react-native';
import {render, screen} from '@testing-library/react-native';
import {useFakeHook} from '../../../hooks';

jest.mock('../../../hooks/useFakeHook'); // this does not actually mock!

console.log(jest.isMockFunction(useFakeHook));

describe('sample', () => {
  it('should test', () => {
    render(
      <View>
        <Text>hello Menu screen</Text>
      </View>,
    );

    screen.getByText('hello Menu screen');
  });
});
