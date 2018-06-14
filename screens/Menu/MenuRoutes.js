import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Screen2 from '../screen2';
import Screen3 from '../screen3';
import ContainerPosts from '../Posts/ContainerPosts';

const routes = {
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

/* eslint-disable */
function withNavigation(WrappedComponent, props) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...props} />;
    }
  };
}

const renderScene = (props) => {
  const PostsScreen = withNavigation(ContainerPosts, props);
  const Screen2Screen = withNavigation(Screen2, props);
  const Screen3Screen = withNavigation(Screen3, props);

  return BottomNavigation.SceneMap({
    music: PostsScreen,
    albums: Screen2Screen,
    recents: Screen3Screen,
  });
};

export { routes, renderScene };
