import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider, Text} from 'react-native-elements';

import List from './List.js';

export default function DayGroup(props) {
  const {date = 'No Data', spendingLog = []} = props;
  if (spendingLog.length > 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>{date}</Text>
        <Divider />
        <List spendingLog={spendingLog} />
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 5,
  },
  container: {
    paddingTop: 10,
  },
});
