import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const TextPower = (props) => (
  <Text style={props.style}>
    {`${props.titulo} - ${props.post.comment} ${props.post.subtitulo}`}
  </Text>
);

TextPower.propTypes = {
  style: PropTypes.number,
  titulo: PropTypes.string.isRequired,
  post: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
  }),
};

export default TextPower;
