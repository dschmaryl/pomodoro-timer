import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';

import { styles } from './styles';

export class Start extends React.Component {
  constructor() {
    super();
    this.onStartScreenPress = this.onStartScreenPress.bind(this);
    this.state = { time: null, interval: null };
  }

  componentDidMount() {
    this.setState({
      time: new Date().getTime(),
      interval: setInterval(() => {
        if (new Date().getTime() - this.state.time > 2000) {
          this.setState({ interval: clearInterval(this.state.interval) }, () =>
            this.props.navigation.navigate('Timer')
          );
        }
      }, 200)
    });
  }

  onStartScreenPress() {
    this.setState({ interval: clearInterval(this.state.interval) }, () =>
      this.props.navigation.navigate('Timer')
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
