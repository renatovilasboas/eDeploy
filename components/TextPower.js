import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';

const TextPower = (props) => (
  <TouchableHighlight>
    <View>
      <Text style={props.style}> {props.post.title}</Text>
      <Text style={props.style}> {props.post.body}</Text>
    </View>
  </TouchableHighlight>
);

TextPower.propTypes = {
  style: PropTypes.number,
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default TextPower;
