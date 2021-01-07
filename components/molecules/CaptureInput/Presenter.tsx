import * as React from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { BasicInput } from '../../atoms/BasicInput/index';

interface Props {
  placeholder: string;
  color: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onPress: () => void;
}

const Presenter = (props: Props) => {
  const { placeholder, color, onChange, onPress } = props;
  return (
    <View style={styles.wrapper}>
      <BasicInput placeholder={placeholder} onChange={onChange} />
      <Icon onPress={onPress} style={styles.icon} name="send" color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 32,
  },
  icon: {
    marginTop: 12,
  },
});

export { Presenter };
