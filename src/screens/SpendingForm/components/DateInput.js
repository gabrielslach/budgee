import React, {useEffect, useState} from 'react';
import {ActivityIndicator, InteractionManager} from 'react-native';

import DatePicker from 'react-native-date-picker';
import styles from '../styles';

export default function SpendingForm(props) {
  const {date, onDateChange} = props;
  const [isFocused, setIsFocused] = useState(true);
  const [localDate, setLocalDate] = useState(new Date());

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setIsFocused(false);
    });
  }, []);

  useEffect(() => {
    setLocalDate(new Date(date));
  }, [date]);

  const handleDateChange = data => onDateChange(String(data));

  return isFocused ? (
    <ActivityIndicator size="large" />
  ) : (
    <DatePicker
      date={localDate}
      onDateChange={handleDateChange}
      mode="date"
      style={styles.datepicker}
    />
  );
}
