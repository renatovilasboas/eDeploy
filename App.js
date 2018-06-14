/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { createStackNavigator } from 'react-navigation';
import { DefaultTheme } from 'react-native-paper';
import Main from './screens/Menu/main';
import DetailPost from './screens/Posts/DetailPost';

export default createStackNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Posts',
        headerStyle: {
          backgroundColor: DefaultTheme.colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    DetailPost: {
      screen: DetailPost,
      navigationOptions: {
        title: 'Detalhes',
        headerStyle: {
          backgroundColor: DefaultTheme.colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);
