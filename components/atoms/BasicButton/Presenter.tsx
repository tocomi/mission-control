import * as React from 'react';
import { Button } from 'react-native-elements';

interface Props {
  title: string;
  onPress: () => void;
}

const Presenter = (props: Props) => {
  const { title, onPress } = props;
  return <Button title={title} onPress={onPress} raised={true} />;
};

export { Presenter };
