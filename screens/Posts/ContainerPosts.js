import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostsScreen from './PostsScreen';
import { requestPosts, requestUsers } from './api';
import { requestPostSuccess, requestUsersSuccess } from './actions';

const photos = [
  {
    id: 1,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 2,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/g03.png',
  },
  {
    id: 3,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/g03.png',
  },
  {
    id: 4,
    photo:
      'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18350.png',
  },
  {
    id: 5,
    photo:
      'https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18341.png',
  },
  {
    id: 6,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 7,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 8,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 9,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
  {
    id: 10,
    photo: 'https://findicons.com/files/icons/1072/face_avatars/300/i02.png',
  },
];

const generatePostsToView = (posts, users) => {
  const postsToView = [];

  posts.forEach((post) => {
    const user = users.find((x) => x.id === post.userId);
    const photoUser = photos.find((x) => x.id === post.userId);

    postsToView.push({
      id: post.id,
      userId: post.userId,
      name: user.name,
      photo: photoUser.photo,
      title: post.title,
      body: post.body,
    });
  });

  return postsToView;
};

class ContainerPosts extends Component {
  constructor() {
    super();
    this.requestPosts();
  }

  async requestPosts() {
    const posts = await requestPosts();
    /* eslint-disable*/
    const { requestPostSuccess, requestUsersSuccess } = this.props;

    requestPostSuccess(posts);

    const users = await requestUsers();
    requestUsersSuccess(users);
  }

  render() {
    return <PostsScreen {...this.props} posts={this.props.postsToView} />;
  }
}

const mapStateToProps = (state) => ({
  postsToView: generatePostsToView(
    state.postsContainer.posts,
    state.postsContainer.users
  ),
});

const mapDispatchToProps = {
  requestPostSuccess,
  requestUsersSuccess,
};

ContainerPosts.propTypes = {
  requestPostSuccess: PropTypes.func.isRequired,
  requestUsersSuccess: PropTypes.func.isRequired,
  postsToView: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerPosts);
