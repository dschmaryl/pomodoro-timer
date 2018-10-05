import React from 'react';
import { ScrollView, View } from 'react-native';

import { Header } from './Header';
import Timer from '../containers/Timer';
import Session from '../containers/Session';
import WorkTime from '../containers/WorkTime';
import ShortBreak from '../containers/ShortBreak';
import LongBreak from '../containers/LongBreak';
import SoundEnable from '../containers/SoundEnable';
import Volume from '../containers/Volume';
import Theme from '../containers/Theme';
import DarkMode from '../containers/DarkMode';
import KeepAwake from '../containers/KeepAwake';
import { Picker } from './Picker';
import { Footer } from './Footer';

import { styles } from './styles';

export const Menu = ({ colors }) => (
  <View>
    <ScrollView style={[styles.scrollView, colors.backgroundColor]}>
      <Header colors={colors} />
      <Timer />
      <Session />
      <WorkTime />
      <ShortBreak />
      <LongBreak />
      <Volume />
      <SoundEnable />
      <KeepAwake />
      <DarkMode />
      <Theme />
      <Footer colors={colors} />
    </ScrollView>
    {/* <Picker
      showPicker={true}
      data={[1, 2, 3, 4, 5, 6]}
      selectedIndex={3}
      onSelect={() => null}
      colors={colors}
    /> */}
  </View>
);
