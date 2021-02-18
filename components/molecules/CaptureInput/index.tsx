import * as React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Presenter } from './Presenter';

interface Props {
  placeholder: string;
  color: string;
  value: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onPress: () => void;
}

const CaptureInput = (props: Props) => {
  const { placeholder, color, value, onChange, onPress } = props;
  return (
    <Presenter
      placeholder={placeholder}
      color={color}
      value={value}
      onChange={onChange}
      onPress={onPress}
    />
  );
};

export { CaptureInput };
