import React from 'react';
import { ScrollView, Text, View, Switch } from 'react-native';

import { Timer } from './Timer';
import { Session } from './Session';
import { Adjuster } from './Adjuster';
import { Theme } from './Theme';

import { styles } from './styles';

export const Settings = props => (
  <ScrollView style={[styles.scrollView, props.colors.backgroundColor]}>
    <View style={[styles.headerView, props.colors.borderColor]}>
      <Text style={[styles.headerText, props.colors.textColor]}>Settings</Text>
    </View>

    <Timer {...props} />

    <Session
      pomodoro={props.pomodoro}
      sessionString={props.sessionString}
      finishSession={props.finishSession}
      backOneSession={props.backOneSession}
      resetTimer={props.resetTimer}
      colors={props.colors}
    />

    <Adjuster
      label="Work time length"
      time={props.workTime}
      onDecrease={props.decreaseWorkTime}
      onIncrease={props.increaseWorkTime}
      colors={props.colors}
    />

    <Adjuster
      label="Short break length"
      time={props.shortBreakTime}
      onDecrease={props.decreaseShortBreakTime}
      onIncrease={props.increaseShortBreakTime}
      colors={props.colors}
    />

    <Adjuster
      label="Long break length"
      time={props.longBreakTime}
      onDecrease={props.decreaseLongBreakTime}
      onIncrease={props.increaseLongBreakTime}
      colors={props.colors}
    />

    <View style={[styles.rowView, props.colors.borderColor]}>
      <Text style={[styles.rowText, props.colors.textColor]}>
        Sound enabled:
      </Text>
      <View style={styles.switchView}>
        <Switch
          onValueChange={props.toggleSoundEnabled}
          value={props.soundEnabled}
          style={styles.switch}
        />
      </View>
    </View>

    <Adjuster
      label="Volume"
      time={props.volume}
      onDecrease={props.decreaseVolume}
      onIncrease={props.increaseVolume}
      colors={props.colors}
    />

    <Theme
      theme={props.theme}
      toggleTheme={props.toggleTheme}
      colors={props.colors}
    />
  </ScrollView>
);
