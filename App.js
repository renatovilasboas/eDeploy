/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { createStackNavigator } from 'react-navigation';
import Menu from './screens/menu';

export default createStackNavigator(
  {
    Home: {
      screen: Menu,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
