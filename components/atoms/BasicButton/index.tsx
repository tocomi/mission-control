import * as React from 'react';
import { Presenter } from './Presenter';

interface Props {
  title: string;
  onPress: () => void;
}

const BasicButton = (props: Props) => {
  const { title, onPress } = props;
  return <Presenter title={title} onPress={onPress} />;
};

export { BasicButton };
