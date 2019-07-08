import React from 'react';
import { ScrollView, View } from 'react-native';

import { Header } from './Header';
import Timer from '../containers/Timer';
import Session from '../containers/Session';
import FocusTime from '../containers/FocusTime';
import ShortBreak from '../containers/ShortBreak';
import LongBreak from '../containers/LongBreak';
import NumPomodoros from '../containers/NumPomodoros';
import PauseEnable from '../containers/PauseEnable';
import PauseButton from '../containers/PauseButton';
import KeepAwake from '../containers/KeepAwake';
import Background from '../containers/Background';
import Notification from '../containers/Notification';
import AlarmEnable from '../containers/AlarmEnable';
import AlarmRepeat from '../containers/AlarmRepeat';
import AlarmVolume from '../containers/AlarmVolume';
import AlarmSound from '../containers/AlarmSound';
import TickEnable from '../containers/TickEnable';
import TickVolume from '../containers/TickVolume';
// import TickSound from '../containers/TickSound';
import Theme from '../containers/Theme';
import DarkMode from '../containers/DarkMode';
import TimePicker from '../containers/TimePicker';
import Picker from '../containers/Picker';
import { Footer } from './Footer';

import { styles } from './styles';

export const Menu = ({ colors }) => (
  <View>
    <ScrollView style={[styles.scrollView, colors.backgroundColor]}>
      <Header colors={colors} />
      <Timer />
      <Session />
      <FocusTime />
      <ShortBreak />
      <LongBreak />
      <NumPomodoros />
      <PauseEnable />
      <PauseButton />
      <KeepAwake />
      <Background />
      <Notification />
      <AlarmEnable />
      <AlarmRepeat />
      <AlarmVolume />
      <AlarmSound />
      <TickEnable />
      <TickVolume />
      {/* <TickSound /> */}
      <Theme />
      <DarkMode />
      <Footer colors={colors} />
    </ScrollView>
    <TimePicker />
    <Picker />
  </View>
);
