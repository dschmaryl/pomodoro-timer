import React from 'react';
import { AppState, View } from 'react-native';

import Start from '../containers/Start';
import MenuButton from '../containers/MenuButton';
import Session from '../containers/Session';
import Time from '../containers/Time';
import MainButton from '../containers/MainButton';
import Alarm from '../containers/Alarm';
import Tick from '../containers/Tick';
import ScreenAwake from '../containers/ScreenAwake';
import Notification from '../containers/Notification';

import { styles } from './styles';

export class Main extends React.Component {
  componentDidMount = () => {
    this.props.setAppState('active');
    AppState.addEventListener('change', this.handleAppStateChange);
  };

  componentWillUnmount = () =>
    AppState.removeEventListener('change', this.handleAppStateChange);

  handleAppStateChange = nextAppState => this.props.setAppState(nextAppState);

  render = () => (
    <View style={[styles.mainContainer, this.props.colors.backgroundColor]}>
      <MenuButton />
      <Session />
      <Time textStyle={styles.timeText} />
      <MainButton />
      <Alarm />
      <Tick />
      <ScreenAwake />
      <Notification />
      <Start />
    </View>
  );
}
