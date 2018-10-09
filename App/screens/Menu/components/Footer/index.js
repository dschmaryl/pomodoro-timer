import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

import { styles } from './styles';

export const Footer = ({ colors }) => (
  <View style={styles.footerView}>
    <Text style={[styles.footerText, colors.textColor]}>
      Created by daryl
      {'  ~  '}
    </Text>
    <TouchableOpacity
      onPress={() => Linking.openURL('https://dschmaryl.github.io')}
      style={styles.footerTouchable}
    >
      <Text style={[styles.footerText, colors.buttonColor]}>Contact</Text>
    </TouchableOpacity>
  </View>
);
