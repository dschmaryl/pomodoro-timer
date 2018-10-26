import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export class Start extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.setFirstRunToFalse(), 1600);
  }

  render() {
    if (this.props.firstRun) {
      return (
        <View
          style={[styles.startContainer, this.props.colors.backgroundColor]}
        >
          <TouchableOpacity
            onPress={() => this.props.setFirstRunToFalse()}
            style={styles.startContainer}
          >
            <View style={styles.startHeaderView}>
              <Text
                style={[styles.startHeaderText, this.props.colors.textColor]}
              >
                Pomodoro
              </Text>
              <Text
                style={[styles.startHeaderText, this.props.colors.textColor]}
              >
                Timer
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  }
}
