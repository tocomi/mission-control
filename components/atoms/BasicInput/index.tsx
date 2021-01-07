import * as React from 'react';
import { Presenter } from './Presenter';

interface Props {
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const BasicInput = (props: Props) => {
  const { placeholder, setValue } = props;
  return <Presenter placeholder={placeholder} setValue={setValue} />;
};

export { BasicInput };
