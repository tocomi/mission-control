import * as React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Presenter } from './Presenter';

interface Props {
  placeholder: string;
  color: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onPress: () => void;
}

const CaptureInput = (props: Props) => {
  const { placeholder, color, onChange, onPress } = props;
  return <Presenter placeholder={placeholder} color={color} onChange={onChange} onPress={onPress} />;
};

export { CaptureInput };
