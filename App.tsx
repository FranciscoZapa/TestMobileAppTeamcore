import * as React from 'react';
import {Navigator} from './src/routes/Navigator';
import {Provider} from 'react-redux';
import {store} from './src/core/store';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/styles/Theme';
const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
