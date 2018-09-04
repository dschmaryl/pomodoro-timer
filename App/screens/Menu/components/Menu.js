import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../containers/Header';
import Timer from '../containers/Timer';
import Session from '../containers/Session';
import WorkTime from '../containers/WorkTime';
import ShortBreak from '../containers/ShortBreak'
import LongBreak from '../containers/LongBreak'
import SoundEnable from '../containers/SoundEnable'
import Volume from '../containers/Volume'
import Theme from '../containers/Theme';
import LightDark from '../containers/LightDark';
import KeepAwake from '../containers/KeepAwake';

import { styles } from './styles';

export const Menu = ({ colors }) => (
  <ScrollView style={[styles.scrollView, colors.backgroundColor]}>
    <Header />
    <Timer />
    <Session/>
    <WorkTime />
    <ShortBreak />
    <LongBreak />
    <SoundEnable />
    <Volume />
    <Theme />
    <LightDark />
    <KeepAwake />
  </ScrollView>
);
