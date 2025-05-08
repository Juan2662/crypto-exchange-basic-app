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
import './global.css';

function App(): React.JSX.Element {
  return (
    <Fragment>
      <StatusBarApp />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['top']}>
          <RootNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;
