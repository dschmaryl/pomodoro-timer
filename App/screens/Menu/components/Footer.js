import React from 'react';
import { View, Text, TouchableWithoutFeedback, Linking } from 'react-native';

import { styles } from './styles';

export const Footer = ({ colors }) => (
  <View style={styles.footerView}>
    <View>
      <Text style={[styles.footerText, colors.textColor]}>
        Created by Daryl
        {' ~ '}
      </Text>
    </View>
    <TouchableWithoutFeedback
      onPress={() => Linking.openURL('https://dschmaryl.github.io')}
    >
      <View style={styles.footerLinkView}>
        <Text style={[styles.footerText, colors.iconButtonColor]}>Contact</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);
