/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment } from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StatusBarApp from './src/shared/components/StatusBarApp';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import './global.css';
if (__DEV__) {
  require('./ReactotronConfig');
}

function App(): React.JSX.Element {
  return (
    <Fragment>
      <StatusBarApp />
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container} edges={['top']}>
            <RootNavigation />
          </SafeAreaView>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;
