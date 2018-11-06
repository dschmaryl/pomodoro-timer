import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const Button = ({ onPress, disabled, children }) => (
  <TouchableOpacity
    onPress={() => onPress()}
    disabled={disabled}
    style={styles.touchable}
  >
    {children}
  </TouchableOpacity>
);
