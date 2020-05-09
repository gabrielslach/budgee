/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import NavigationEntry from './src/navigation';
import {Provider} from './src/context';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider>
        <NavigationEntry />
      </Provider>
    </>
  );
};
export default App;
