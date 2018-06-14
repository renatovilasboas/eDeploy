import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Menu from '../Menu/menu';
import theme from '../Menu/theme';

export default function Main(props) {
  return (
    <PaperProvider theme={theme}>
      <Menu {...props} />
    </PaperProvider>
  );
}
