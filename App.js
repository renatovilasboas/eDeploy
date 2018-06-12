/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { BottomNavigation, Appbar } from 'react-native-paper';
import styled from 'styled-components';
import TextPower from './components/TextPower';
import urlRequest from './utils/UrlRequest';
import PostsScreen from './screens/posts';
import Screen2 from './screens/screen2';
import Screen3 from './screens/screen3';

const Cabecalho = styled.View`
  background-color: #3498db;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      posts: [],
      index: 0,
      routes: [
        {
          key: 'music',
          title: 'Music',
          icon: 'queue-music',
          color: '#bdc3c7',
        },
        {
          key: 'albums',
          title: 'Albums',
          icon: 'album',
          color: '#bdc3c7',
        },
        {
          key: 'recents',
          title: 'Recents',
          icon: 'history',
          color: '#bdc3c7',
        },
      ],
    };
  }

  async componentDidMount() {
    const posts = await urlRequest('https://jsonplaceholder.typicode.com/posts');
    this.setState({
      posts,
    });
  }

  handleIndexChange = (index) => this.setState({ index });

  handleGoBack = () => this.setState({ index: index - 1 });

  renderScene = BottomNavigation.SceneMap({
    music: PostsScreen,
    albums: Screen2,
    recents: Screen3,
  });

  render() {
    return (
      <View style={styles.container}>
        <Appbar style={{ display: 'flex', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 14 }}>TITULO</Text>
        </Appbar>

        <BottomNavigation
          style={{ flex: 1 }}
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

/* <View style={styles.container}>
        <BottomNavigation
          style={{ flex: 1 }}
          navigationState={this.state}
          onIndexChange={this.handleIndexChange}
          renderScene={this.renderScene}
        />
      </View>
       */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7',
    justifyContent: 'space-between',
  },
  bottomBar: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'red',
  },
  fundo: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPower: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text1: {
    backgroundColor: '#9b59b6',
    flexGrow: 1,
  },
  text2: {
    backgroundColor: '#27ae60',
    flexGrow: 1,
  },
  text3: {
    backgroundColor: '#3498db',
    flexGrow: 1,
  },
});
