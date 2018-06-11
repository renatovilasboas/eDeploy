/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import TextPower from './components/TextPower';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const myObject = { comment: 'meu comentário', subtitulo: 'subtitulo' };

    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text>Titulo</Text>
        </View>

        <View style={styles.fundo}>
          <TextPower style={styles.textPower} titulo="TITULO" post={myObject} />
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
