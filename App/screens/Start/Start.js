import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

import { styles } from './styles';

export class Start extends React.Component {
  constructor() {
    super();
    this.onStartScreenPress = this.onStartScreenPress.bind(this);
    this.state = { time: null, interval: null };
  }

  componentDidMount() {
    this.setState({
      time: Date.now(),
      interval: setInterval(() => {
        if (Date.now() - this.state.time > 1600) {
          this.navigateToTimer();
        }
      }, 200)
    });
  }

  onStartScreenPress() {
    this.navigateToTimer();
  }

  navigateToTimer() {
    this.setState({ interval: clearInterval(this.state.interval) }, () =>
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Timer' })]
        })
      )
    );
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.onStartScreenPress}>
        <View
          style={[styles.startContainer, this.props.colors.backgroundColor]}
        >
          <View style={styles.startHeaderView}>
            <Text style={[styles.startHeaderText, this.props.colors.textColor]}>
              Pomodoro
            </Text>
            <Text style={[styles.startHeaderText, this.props.colors.textColor]}>
              Timer
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
