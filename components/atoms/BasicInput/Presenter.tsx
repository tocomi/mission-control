import * as React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Input } from 'react-native-elements';

interface Props {
  placeholder: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const Presenter = (props: Props) => {
  const { placeholder, onChange } = props;

  return <Input placeholder={placeholder} onChange={onChange} />;
};

export { Presenter };
