import {useState} from 'react';

export const useFakeHook = () => {
  useState();
  return 5;
};
