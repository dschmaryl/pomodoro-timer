import React from 'react';
import Sound from 'react-native-sound';

import { sounds } from '../../../sounds';

export class Alarm extends React.Component {
  state = { alarmVolume: null, alarmSoundIndex: null };

  alarms = sounds.alarmSounds.map(
    alarmSound =>
      new Sound(alarmSound.soundFile, null, error => {
        if (error) {
          console.log('alarm sound error: ', error);
          console.log('soundFile: ', alarmSound.soundFile);
          return;
        }
      })
  );

  componentDidMount = () => {
    this.setState({
      alarmVolume: this.props.alarmVolume,
      alarmSoundIndex: this.props.alarmSoundIndex
    });
    this.alarms[this.props.alarmSoundIndex].setVolume(
      this.props.alarmVolume / 100
    );
  };

  componentWillReceiveProps = newProps => {
    if (newProps.alarmVolume !== this.state.alarmVolume) {
      this.setState({ alarmVolume: newProps.alarmVolume });
      this.alarms[newProps.alarmSoundIndex].setVolume(
        newProps.alarmVolume / 100
      );
    }

    if (newProps.alarmIsPlaying) {
      this.alarms[newProps.alarmSoundIndex].play(() => {
        this.props.toggleAlarmPlaying();
      });
    } else if (!newProps.alarmIsPlaying) {
      this.alarms[newProps.alarmSoundIndex].stop();
    }
  };

  componentWillUnmount = () => this.alarms.map(alarm => alarm.stop());

  render = () => null;
}
