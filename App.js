/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TextPower from './components/TextPower';
import urlRequest from './utils/UrlRequest';
import { Button } from 'react-native-paper';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const posts = await urlRequest('https://jsonplaceholder.typicode.com/posts');
    this.setState({
      posts,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text>Titulo</Text>
          <Button raised onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </View>

        <View style={styles.fundo}>
          <FlatList
            data={this.state.posts}
            keyExtractor={(item) => `txtPwd_${item.id.toString()}`}
            renderItem={({ item }) => (
              <TextPower style={styles.textPower} post={item} />
            )}
          />
        </View>

        <View style={styles.bottomBar}>
          <Text style={styles.text1}>1</Text>
          <Text style={styles.text2}>2</Text>
          <Text style={styles.text3}>3</Text>
        </View>
      </View>
    );
  }
}

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
