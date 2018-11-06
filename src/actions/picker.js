import { themes } from '../themes';

export const showPicker = (valueType, oldValue) => (dispatch, getState) => {
  let data;
  let visibleItemCount = 9;
  let isCyclic = false;
  const typeSlice = valueType.slice(-4);
  const selectedItemPosition =
    typeSlice === 'heme' ? getState().theme.themeIndex : oldValue - 1;

  if (typeSlice === 'Time') {
    data = Array(99)
      .fill()
      .map((_, i) => '-  ' + (i + 1) + '  -');
  } else if (typeSlice === 'lume') {
    data = Array(100)
      .fill()
      .map((_, i) => '-  ' + (i + 1) + '  -');
  } else {
    data = themes.map(theme => theme.name);
    visibleItemCount = 7;
    isCyclic = true;
  }

  return dispatch({
    type: 'SHOW_PICKER',
    valueType,
    data,
    visibleItemCount,
    selectedItemPosition,
    isCyclic
  });
};

export const setPickerValue = newValue => (dispatch, getState) => {
  const { valueType } = getState().picker;
  const typeSlice = valueType.slice(-4);
  if ( typeSlice === 'Time') {
    return dispatch({
      type: 'SET_TIME',
      timeType: valueType,
      newTime: newValue + 1
    });
  } else if (typeSlice === 'lume') {
    return dispatch({
      type: 'SET_VOLUME',
      soundType: valueType,
      volume: newValue + 1
    });
  } else {
    return dispatch({
      type: 'SET_THEME',
      themeIndex: newValue
    });
  }
};

export const hidePicker = () => ({ type: 'HIDE_PICKER' });
