export const picker = (
  state = { pickerVisible: false, valueType: null, oldValue: null },
  action
) => {
  switch (action.type) {
    case 'SHOW_PICKER':
      return {
        pickerVisible: true,
        valueType: action.valueType,
        oldValue: action.oldValue
      };

    case 'HIDE_PICKER':
      return { ...state, pickerVisible: false };

    case 'SHOW_THEME_PICKER':
      return { ...state, themePickerVisible: true };

    case 'HIDE_THEME_PICKER':
      return { ...state, themePickerVisible: false };

    default:
      return state;
  }
};
