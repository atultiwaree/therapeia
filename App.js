import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Main';
import {navigationRef} from './Navigation/RootNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import store from './redux/store';
import NetworkStatusOverlay from './NetworkStatusOverlay';
import { NetworkProvider } from './NetworkContext';
const persistor = persistStore(store);
import BootSplash from 'react-native-bootsplash';



const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={navigationRef} onReady={() => BootSplash.hide({fade: true})}>
        <NetworkProvider>

          <Main />

          <NetworkStatusOverlay />
          </NetworkProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
