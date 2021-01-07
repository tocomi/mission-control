import * as React from 'react';
import { Presenter } from './Presenter';

interface Props {
  placeholder: string;
  color: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onPress: () => void;
}

const CaptureInput = (props: Props) => {
  const { placeholder, color, setValue, onPress } = props;
  return <Presenter placeholder={placeholder} color={color} setValue={setValue} onPress={onPress} />;
};

export { CaptureInput };
