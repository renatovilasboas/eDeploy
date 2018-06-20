import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import Menu from '../Menu/menu';
import theme from '../Menu/theme';
import configStore from '../../store/configureStore';

const store = configStore();

export default function Main(props) {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Menu {...props} />
      </PaperProvider>
    </Provider>
  );
}
