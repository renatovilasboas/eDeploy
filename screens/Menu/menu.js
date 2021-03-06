import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { routes, renderScene } from './MenuRoutes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7',
    justifyContent: 'space-between',
  },
});

class Menu extends Component {
  constructor() {
    super();
    /* eslint-disable*/
    this.state = {
      index: 0,
      routes: [...routes.routes],
    };
  }

  /* eslint-disable-next-line */
  handleIndexChange = (index) => this.setState({ index });

  render() {
    const scenes = renderScene(this.props);
    return (
      <View style={styles.container}>
        <BottomNavigation
          style={{ flex: 1 }}
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={scenes}
        />
      </View>
    );
  }
}

export default Menu;
