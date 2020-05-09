import React, {useEffect, useState} from 'react';

import {ButtonGroup} from 'react-native-elements';

import styles from '../styles';

export default function SelectType(props) {
  const {value, onChange} = props;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const buttons = ['Living', 'Leisure', 'Others'];

  useEffect(() => {
    setSelectedIndex(buttons.indexOf(value));
  }, [value, buttons]);

  const handlePress = index => onChange(buttons[index]);

  return (
    <ButtonGroup
      onPress={handlePress}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={styles.buttonGroup}
    />
  );
}
