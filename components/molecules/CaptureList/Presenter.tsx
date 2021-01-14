import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

import { Capture } from '../../../types/Capture';

interface Props {
  captureList: Capture[];
}

const Presenter = (props: Props) => {
  const { captureList } = props;
  return (
    <ScrollView style={styles.wrapper}>
      {captureList.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export { Presenter };
