import * as React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Input } from 'react-native-elements';

interface Props {
  placeholder: string;
  value: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const Presenter = (props: Props) => {
  const { placeholder, value, onChange } = props;
  return <Input placeholder={placeholder} value={value} onChange={onChange} />;
};

export { Presenter };
