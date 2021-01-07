import * as React from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData } from 'react-native';

import { Text, View } from '../components/Themed';
import { CaptureInput } from '../components/molecules/CaptureInput/index';

export default function TabOneScreen() {
  const [capture, setCapture] = React.useState<string>('');

  const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setCapture(event.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CaptureInput
        placeholder="何をキャプチャしますか？"
        color="#28a"
        onChange={handleChange}
        onPress={() => {
          alert(capture);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
