import React from 'react';
import {View} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import {Controller} from 'react-hook-form';
import styles from '../styles';

export default function Input(props) {
  const {control, name, label, required = false, error = false} = props;
  return (
    <View style={styles.inputContainer}>
      <Controller
        as={OutlinedTextField}
        control={control}
        name={name}
        label={label}
        onChange={args => args[0].nativeEvent.text}
        rules={{required: required}}
        defaultValue=""
        error={error ? 'Required' : null}
        baseColor={'rgba(0,0,0,.3)'}
      />
    </View>
  );
}
