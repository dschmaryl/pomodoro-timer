import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

import { styles } from './styles';

export class Start extends React.Component {
  componentDidMount() {
    setTimeout(() => this.navigateToTimer(), 1600);
  }

  navigateToTimer() {
    if (this.props.firstBoot) this.props.toggleFirstBoot();
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Timer' })]
      })
    );
  }

  render() {
    return (
      <View style={[styles.startContainer, this.props.colors.backgroundColor]}>
        <TouchableOpacity
          onPress={() => this.navigateToTimer()}
          style={styles.startContainer}
        >
          <View style={styles.startHeaderView}>
            <Text style={[styles.startHeaderText, this.props.colors.textColor]}>
              Pomodoro
            </Text>
            <Text style={[styles.startHeaderText, this.props.colors.textColor]}>
              Timer
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
