import {useFakeHook} from '../../hooks';

// jest.mock('../../hooks/useFakeHook'); // uncommenting this will work!
console.log(jest.isMockFunction(useFakeHook));

beforeAll(() => {
  console.log('hello Menu');
});
