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
import SoundEnable from '../containers/SoundEnable';
import Volume from '../containers/Volume';
import Theme from '../containers/Theme';
import DarkMode from '../containers/DarkMode';
import KeepAwake from '../containers/KeepAwake';
import TimePicker from '../containers/TimePicker';
import VolumePicker from '../containers/VolumePicker';
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
      <SoundEnable />
      <Volume />
      <KeepAwake />
      <Theme />
      <DarkMode />
      <Footer colors={colors} />
    </ScrollView>
    <TimePicker />
    <VolumePicker />
    <ThemePicker />
  </View>
);
