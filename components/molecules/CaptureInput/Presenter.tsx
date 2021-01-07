import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { BasicInput } from '../../atoms/BasicInput/index';

interface Props {
  placeholder: string;
  color: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onPress: () => void;
}

const Presenter = (props: Props) => {
  const { placeholder, color, setValue, onPress } = props;
  return (
    <View style={styles.wrapper}>
      <BasicInput placeholder={placeholder} setValue={setValue} />
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
