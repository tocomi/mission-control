import * as React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { View } from '../components/Themed';
import { CaptureInput } from '../components/molecules/CaptureInput/index';
import { CaptureList } from '../components/molecules/CaptureList';

export default function CaptureScreen() {
  const [capture, setCapture] = React.useState<string>('');

  const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setCapture(event.nativeEvent.text);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
    >
      <View style={styles.captureList}>
        <CaptureList />
      </View>
      <View style={styles.input}>
        <CaptureInput
          placeholder="何をキャプチャしますか？"
          color="#28a"
          value={capture}
          onChange={handleChange}
          onPress={() => {
            alert(capture);
            setCapture('');
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  captureList: {
    backgroundColor: '#eee',
    flex: 1,
  },
  input: {
    alignItems: 'center',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    height: 56,
    justifyContent: 'center',
  },
});
