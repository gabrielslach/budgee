import React, {useState, useEffect, useContext} from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  InteractionManager,
} from 'react-native';

import {useIsFocused} from '@react-navigation/native';

import * as Comp from './components';
import FormData from '../../context';

//TODO implement local storage

function SpendingLogsMain(props) {
  const {navigation} = props;
  const [spendLog, setSpendLog] = useState({});
  const {state} = useContext(FormData);
  const isFocused = useIsFocused();

  useEffect(() => {
    const {date, title, note, amount, type} = state;
    if (date) {
      let spendLog_temp = {...spendLog};
      if (spendLog_temp[`${date}`]) {
        spendLog_temp[`${date}`].push({
          id: 1,
          title,
          note,
          amount,
          type,
        });
      } else {
        spendLog_temp[`${date}`] = [
          {
            id: 1,
            title,
            note,
            amount,
            type,
          },
        ];
      }
      setSpendLog(spendLog_temp);
    }
  }, [state]);

  const sLEntries = Object.entries(spendLog);
  return isFocused ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {spendLog &&
          sLEntries.map((item, index) => mapFx(item[1], item[0], index))}
      </ScrollView>
      <Comp.AddIcon
        onPress={() => {
          navigation.navigate('spendingForm');
        }}
      />
    </SafeAreaView>
  ) : null;
}

const mapFx = (sLItem, item, index) => (
  <Comp.DayGroup key={index} date={item} spendingLog={sLItem} />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});

export default function SpendingLogs({navigation}) {
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setIsFocused(true);
    });
  }, []);
  return isFocused ? (
    <SpendingLogsMain navigation={navigation} />
  ) : (
    <ActivityIndicator size="large" />
  );
}
