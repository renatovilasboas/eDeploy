import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, FlatList } from 'react-native';
import TextPower from '../../components/TextPower';

const styles = StyleSheet.create({
  fundo: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPower: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Posts = (props) => (
  <View style={styles.fundo}>
    <FlatList
      data={props.posts}
      keyExtractor={(item) => `txtPwd_${item.id.toString()}`}
      renderItem={({ item }) => (
        <TextPower
          {...props}
          style={styles.textPower}
          post={item}
          handleClick={(post) =>
            props.navigation.navigate('DetailPost', { post })
          }
        />
      )}
    />
  </View>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })),
  navigation: PropTypes.object.isRequired,
};

export default Posts;
