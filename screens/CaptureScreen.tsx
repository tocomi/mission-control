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
import { Capture } from '../types/Capture';

const list: Capture[] = [
  {
    name: 'Amy Farha',
    createdAt: new Date('2020-12-24'),
  },
  {
    name: 'Chris Jackson',
    createdAt: new Date('2020-12-22'),
  },
  {
    name: 'Amy Farha',
    createdAt: new Date('2020-12-21'),
  },
];

export default function CaptureScreen() {
  const [capture, setCapture] = React.useState<string>('');
  const [captureList, setCaptureList] = React.useState<Capture[]>(list);

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
        <CaptureList captureList={captureList} />
      </View>
      <View style={styles.input}>
        <CaptureInput
          placeholder="何をキャプチャしますか？"
          color="#28a"
          value={capture}
          onChange={handleChange}
          onPress={() => {
            setCapture('');
            setCaptureList([
              {
                name: capture,
                createdAt: new Date(),
              },
              ...captureList,
            ]);
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
