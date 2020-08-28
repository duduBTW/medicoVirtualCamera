/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';
import {PermissionsAndroid, Text, Alert, View} from 'react-native';

export async function request_location_runtime_permission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);

    return granted;
  } catch (err) {
    console.warn(err);
  }
}

const App = () => {
  const [aut, setAut] = React.useState(false);
  React.useEffect(() => {
    request_location_runtime_permission().then(() => {
      setAut(true);
    });
  }, []);

  return aut ? (
    <WebView
      javaScriptEnabled={true}
      mediaPlaybackRequiresUserAction={false}
      source={{
        uri:
          'https://beneficiosaude.gerale.com.br/webmedicina/inicio/00000001678/99999998611022',
      }}
    />
  ) : (
    <View>
      <Text>Esperando por permissão...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
