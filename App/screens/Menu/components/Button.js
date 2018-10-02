import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';

export const Button = props => (
  <TouchableOpacity onPress={() => props.onPress()} style={styles.touchable}>
    {props.children}
  </TouchableOpacity>
);
