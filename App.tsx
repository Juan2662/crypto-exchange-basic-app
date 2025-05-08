/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment } from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import StatusBarApp from './src/shared/components/StatusBarApp';

function App(): React.JSX.Element {
  return (
    <Fragment>
      <StatusBarApp />
      <SafeAreaView style={styles.container}>
        <RootNavigation />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});

export default App;
