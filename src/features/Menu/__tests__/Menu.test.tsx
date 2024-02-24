import {View, Text} from 'react-native';
import {render, screen} from '@testing-library/react-native';

describe('sample', () => {
  it('should test', () => {
    render(
      <View>
        <Text>hello Menu screen</Text>
      </View>,
    );

    // ! THE BELOW DOES NOT WORK
    screen.debug(); //?
    console.log(screen.debug());

    screen.getByText('hello Menu screen');
  });
});
