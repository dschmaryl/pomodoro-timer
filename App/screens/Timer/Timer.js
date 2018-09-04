import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import KeepAwake from 'react-native-keep-awake';

import { Alarm } from './Alarm';

import { styles } from './styles';

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      isPaused: true,
      currentSession: props.session
    };
  }

  componentDidMount() {
    this.checkTimer(this.props);
    //Notifications.cancelAllScheduledNotificationsAsync();
  }

  componentWillReceiveProps(newProps) {
    this.checkTimer(newProps);
  }

  checkTimer(props) {
    if (this.props.timeLeft === null) {
      this.setTimer();
    } else if (props.session !== this.state.currentSession) {
      this.setState({ currentSession: props.session }, this.setTimer);
    } else if (props.isFinished) {
      this.props.finishSession();
      this.props.toggleSoundPlaying();
    }

    if (!props.isPaused && this.state.isPaused) {
      this.setState({
        interval: setInterval(this.props.timerTick, 10),
        isPaused: false
      });
    } else if (props.isPaused && !this.state.isPaused) {
      this.setState({
        interval: clearInterval(this.state.interval),
        isPaused: true
      });
    }

    if (!props.isPaused && props.soundIsPlaying)
      this.props.toggleSoundPlaying();
  }

  setTimer() {
    if (this.props.session === 'work') {
      this.props.setTimer(this.props.workTime);
    } else if (this.props.session === 'shortBreak') {
      this.props.setTimer(this.props.shortBreakTime);
    } else {
      this.props.setTimer(this.props.longBreakTime);
    }
  }

  componentWillUnmount() {
    // if (!this.props.isPaused) {
    //   Notifications.scheduleLocalNotificationAsync(
    //     {
    //       title: 'Pomodoro Timer',
    //       body: this.props.sessionString + ' time is up!',
    //       android: { channelId: 'pomodoro' }
    //     },
    //     { time: new Date(this.props.endTime) }
    //   );
    // }
    this.setState({ interval: clearInterval(this.state.interval) });
    if (this.props.soundIsPlaying) this.props.toggleSoundPlaying();
  }

  render() {
    const minutes = Math.floor(this.props.timeLeft / 60000);
    const seconds = Math.floor((this.props.timeLeft % 60000) / 1000);

    return (
      <View style={[styles.timerContainer, this.props.colors.backgroundColor]}>
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('Menu')}
        >
          <View style={styles.settingsIconView}>
            <Icon
              name="md-menu"
              style={[
                styles.settingsIconStyle,
                this.props.colors.iconButtonColor
              ]}
            />
          </View>
        </TouchableNativeFeedback>
        <View style={styles.timerHeaderView}>
          <Text style={[styles.timerHeaderText, this.props.colors.textColor]}>
            {this.props.sessionString}
          </Text>
        </View>
        <View style={styles.timerTimeView}>
          <Text style={[styles.timerTimeText, this.props.colors.textColor]}>
            {minutes}:{seconds < 10 ? '0' + seconds : seconds}
          </Text>
        </View>
        <TouchableNativeFeedback onPress={this.props.togglePaused}>
          <View style={styles.playIconView}>
            {this.props.isPaused ? (
              <Icon
                name="md-play"
                style={[
                  styles.playIconStyle,
                  this.props.colors.iconButtonColor
                ]}
              />
            ) : (
              <Icon
                name="md-pause"
                style={[
                  styles.playIconStyle,
                  this.props.colors.iconButtonColor
                ]}
              />
            )}
          </View>
        </TouchableNativeFeedback>
        {this.props.soundIsEnabled ? (
          <Alarm
            volume={this.props.volume}
            soundIsPlaying={this.props.soundIsPlaying}
          />
        ) : null}
        {this.props.keepScreenAwake &&
        (!this.state.isPaused || this.props.soundIsPlaying) ? (
          <KeepAwake />
        ) : null}
      </View>
    );
    // }
  }
}
