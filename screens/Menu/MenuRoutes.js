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

const renderScene = BottomNavigation.SceneMap({
  music: ContainerPosts,
  albums: Screen2,
  recents: Screen3,
});

export { routes, renderScene };
