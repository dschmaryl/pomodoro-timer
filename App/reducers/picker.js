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

    default:
      return state;
  }
};
