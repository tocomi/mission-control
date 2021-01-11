import * as React from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { BasicInput } from '../../atoms/BasicInput/index';

interface Props {
  placeholder: string;
  color: string;
  value: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onPress: () => void;
}

const Presenter = (props: Props) => {
  const { placeholder, color, value, onChange, onPress } = props;
  return (
    <View style={styles.wrapper}>
      <BasicInput placeholder={placeholder} value={value} onChange={onChange} />
      <Icon onPress={onPress} name="send" color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 32,
  },
});

export { Presenter };
