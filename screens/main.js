import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Menu from '../screens/menu';

const theme = {
  ...DefaultTheme,
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Menu />
    </PaperProvider>
  );
}
