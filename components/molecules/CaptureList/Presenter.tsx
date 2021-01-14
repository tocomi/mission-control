import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

export interface PresentedCapture {
  name: string;
  createdAt: string;
  dueDate?: string;
}

interface Props {
  captureList: PresentedCapture[];
}

const Presenter = (props: Props) => {
  const { captureList } = props;
  return (
    <ScrollView style={styles.wrapper}>
      {captureList.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.createdAt}</ListItem.Subtitle>
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
