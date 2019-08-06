import React from 'react';
import { Alert } from 'react-native';

import { Switcher } from './Switcher';

export const Background = ({ isOn, onToggle, disabled, colors }) => {
  const handleToggle = () => {
    if (!isOn) {
      Alert.alert(
        'Are you sure?',
        'Running the timer in the background can be buggy on some phones.',
        [
          {
            text: 'Yes',
            onPress: () => onToggle()
          },
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel'
          }
        ],
        { cancelable: true }
      );
    } else {
      onToggle();
    }
  };

  return (
    <Switcher
      label="Run timer in background"
      isOn={isOn}
      onToggle={handleToggle}
      disabled={disabled}
      colors={colors}
    />
  );
};
