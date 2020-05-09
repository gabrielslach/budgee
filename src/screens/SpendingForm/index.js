import React, {useEffect, useContext, useState} from 'react';
import {
  ActivityIndicator,
  View,
  ScrollView,
  InteractionManager,
} from 'react-native';

import {Button} from 'react-native-elements';
import {useForm} from 'react-hook-form';

import Input from './components/Input';
import SelectType from './components/SelectType';
import DateInput from './components/DateInput';
import format from 'date-fns/format';

import FormData from '../../context';
import styles from './styles';

const defaultValues = {
  date: String(new Date()),
  type: 'Living',
};

function SpendingFormMain(props) {
  const {navigation} = props;
  const {control, handleSubmit, errors, watch, register, setValue} = useForm({
    defaultValues,
  });
  const typeValue = watch('type');
  const dateValue = watch('date');
  const {reducer} = useContext(FormData);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = data => {
    setIsLoading(true);
    data.date = format(new Date(data.date), 'PPPP');
    navigation.navigate('spendingLogs');
    reducer('add', data);
  };

  useEffect(() => {
    register({name: 'type'});
    register({name: 'date'});
  }, [register]);

  const handleTypeChange = type => setValue('type', type);
  const handleDateChange = date => setValue('date', date);

  const handlePress = () => {
    InteractionManager.runAfterInteractions(() => {
      handleSubmit(onSubmit)();
    });
  };

  const fields = [
    {
      error: errors.title,
      name: 'title',
      label: 'Title',
      required: true,
    },
    {
      error: errors.note,
      name: 'note',
      label: 'Details',
      required: false,
    },
    {
      error: errors.amount,
      name: 'amount',
      label: 'Amount',
      required: true,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {fields.map(item => (
        <Input
          key={`field-${item.name}`}
          control={control}
          error={item.error}
          name={item.name}
          label={item.label}
          required={item.required}
        />
      ))}
      <SelectType value={typeValue} onChange={handleTypeChange} />
      <DateInput date={dateValue} onDateChange={handleDateChange} />
      <View style={styles.submit}>
        <Button raised title="Done" onPress={handlePress} loading={isLoading} />
      </View>
    </ScrollView>
  );
}

export default function SpendingForm({navigation}) {
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setIsFocused(true);
    });
  }, []);
  return isFocused ? (
    <SpendingFormMain navigation={navigation} />
  ) : (
    <ActivityIndicator size="large" />
  );
}
