import React from 'react';

import { Wheel } from './Wheel';

import { themes } from '../../../../themes';

export const NumberPicker = ({
  pickerVisible,
  oldValue,
  setValue,
  hidePicker,
  colors
}) => (
  <Wheel
    pickerVisible={pickerVisible}
    hidePicker={hidePicker}
    colors={colors}
    data={Array(100)
      .fill()
      .map((_, i) => '-  ' + (i + 1) + '  -')}
    visibleItemCount={9}
    selectedItemPosition={oldValue - 1}
    onItemSelected={itemValue => setValue(itemValue.position + 1)}
    colors={colors}
  />
);

export const ThemePicker = ({
  themePickerVisible,
  currentThemeIndex,
  setTheme,
  hideThemePicker,
  colors
}) => (
  <Wheel
    pickerVisible={themePickerVisible}
    hidePicker={hideThemePicker}
    colors={colors}
    data={themes.map(theme => theme.name)}
    isCyclic={true}
    visibleItemCount={5}
    selectedItemPosition={currentThemeIndex}
    onItemSelected={itemValue => setTheme(itemValue.position)}
    colors={colors}
  />
);
