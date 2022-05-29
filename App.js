import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store/index';

import {BottomNav} from './src/components';

const App = ({props}) => {
  return (
    <Provider store={store}>
      <SafeAreaView style={[{backgroundColor: '#161621', height: '100%'}]}>
        <StatusBar barStyle={'dark-content'} />
        <NavigationContainer>
          <BottomNav />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
