import * as React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Presenter } from './Presenter';

interface Props {
  placeholder: string;
  value: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const BasicInput = (props: Props) => {
  const { placeholder, value, onChange } = props;
  return <Presenter placeholder={placeholder} value={value} onChange={onChange} />;
};

export { BasicInput };
