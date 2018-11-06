import React from 'react';
import Sound from 'react-native-sound';

export class Alarm extends React.Component {
  state = { alarmVolume: null };

  alarm = new Sound('alarm.mp3', null, error => {
    if (error) {
      console.log('alarm sound error: ', error);
      return;
    }
  });

  componentDidMount = () => {
    this.setState({ alarmVolume: this.props.alarmVolume });
    this.alarm.setVolume(this.props.alarmVolume / 100);
  };

  componentWillReceiveProps = newProps => {
    if (newProps.alarmVolume !== this.state.alarmVolume) {
      this.setState({ alarmVolume: newProps.alarmVolume });
      this.alarm.setVolume(newProps.alarmVolume / 100);
    }

    if (newProps.alarmIsPlaying) {
      this.alarm.play(() => {
        this.props.toggleAlarmPlaying();
      });
    } else if (!newProps.alarmIsPlaying) {
      this.alarm.stop();
    }
  };

  componentWillUnmount = () => this.alarm.stop();

  render = () => null;
}
