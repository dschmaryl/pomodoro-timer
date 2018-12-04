import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const Header = ({ colors }) => (
  <View style={[styles.headerView, colors.borderColor]}>
    <Text style={[styles.headerText, colors.textColor]}>Timer Settings</Text>
  </View>
);
