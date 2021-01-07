import * as React from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Input } from 'react-native-elements';

interface Props {
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Presenter = (props: Props) => {
  const { placeholder, setValue } = props;

  const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setValue(event.nativeEvent.text);
  };

  return <Input placeholder={placeholder} onChange={handleChange} />;
};

export { Presenter };
