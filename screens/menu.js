import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { routes, renderScene } from './routes';
import Screen2 from '../screens/screen2';
import Screen3 from '../screens/screen3';
import ContainerPosts from '../screens/ContainerPosts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7',
    justifyContent: 'space-between',
  },
});

export default class Menu extends Component {
  static navigationOptions = {
    title: 'Posts',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor() {
    super();
    this.state = {
      index: 0,
      routes: [
        {
          key: 'music',
          title: 'Music',
          icon: 'queue-music',
        },
        {
          key: 'albums',
          title: 'Albums',
          icon: 'album',
        },
        {
          key: 'recents',
          title: 'Recents',
          icon: 'history',
        },
      ],
    };
  }

  handleIndexChange = (index) => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    music: ContainerPosts,
    albums: Screen2,
    recents: Screen3,
  });

  render() {
    return (
      <View style={styles.container}>
        <BottomNavigation
          style={{ flex: 1 }}
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={renderScene}
        />
      </View>
    );
  }
}
