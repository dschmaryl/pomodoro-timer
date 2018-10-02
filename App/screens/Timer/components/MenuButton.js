import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const MenuButton = ({ navigation, colors }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Menu')}
    style={styles.menuTouchable}
  >
    <Icon name="md-menu" style={[styles.icon, colors.buttonColor]} />
  </TouchableOpacity>
);
