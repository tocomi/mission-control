import * as React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Presenter } from './Presenter';

interface Props {
  placeholder: string;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const BasicInput = (props: Props) => {
  const { placeholder, onChange } = props;
  return <Presenter placeholder={placeholder} onChange={onChange} />;
};

export { BasicInput };
