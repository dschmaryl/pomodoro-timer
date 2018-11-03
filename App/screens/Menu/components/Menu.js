import React from 'react';
import { ScrollView, View } from 'react-native';

import { Header } from './Header';
import Timer from '../containers/Timer';
import Session from '../containers/Session';
import FocusTime from '../containers/FocusTime';
import ShortBreak from '../containers/ShortBreak';
import LongBreak from '../containers/LongBreak';
import PauseEnable from '../containers/PauseEnable';
import PauseButton from '../containers/PauseButton';
import Notification from '../containers/Notification';
import AlarmEnable from '../containers/AlarmEnable';
import AlarmVolume from '../containers/AlarmVolume';
import TickEnable from '../containers/TickEnable';
import TickVolume from '../containers/TickVolume';
import Theme from '../containers/Theme';
import DarkMode from '../containers/DarkMode';
import KeepAwake from '../containers/KeepAwake';
import NumberPicker from '../containers/NumberPicker';
import ThemePicker from '../containers/ThemePicker';
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
      <PauseEnable />
      <PauseButton />
      <Notification />
      <AlarmEnable />
      <AlarmVolume />
      <TickEnable />
      <TickVolume />
      <KeepAwake />
      <Theme />
      <DarkMode />
      <Footer colors={colors} />
    </ScrollView>
    <NumberPicker />
    <ThemePicker />
  </View>
);
