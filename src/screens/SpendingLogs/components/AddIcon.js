import React from 'react';
import {View, InteractionManager} from 'react-native';
import {Icon} from 'react-native-elements';

export default function AddIcon(props) {
  const {onPress = null} = props;
  const handlePress = () => {
    InteractionManager.runAfterInteractions(() => onPress());
  };
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
      }}>
      <Icon
        reverse
        name="plus"
        type="font-awesome-5"
        color="#3f51b5"
        reverseColor="#e8eaf6"
        size={30}
        onPress={handlePress}
      />
    </View>
  );
}
