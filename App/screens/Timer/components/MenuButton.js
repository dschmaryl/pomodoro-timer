import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const MenuButton = ({ navigation, colors }) => (
  <TouchableNativeFeedback onPress={() => navigation.navigate('Menu')}>
    <View style={styles.settingsIconView}>
      <Icon
        name="md-menu"
        style={[styles.settingsIconStyle, colors.buttonColor]}
      />
    </View>
  </TouchableNativeFeedback>
);
