import React, { Component } from 'react';
import urlRequest from '../../utils/UrlRequest';
import PostsScreen from './PostsScreen';

export default class ContainerPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };

    urlRequest('https://jsonplaceholder.typicode.com/posts').then((posts) =>
      this.setState({ posts }));
  }

  render() {
    return <PostsScreen posts={this.state.posts} />;
  }
}
