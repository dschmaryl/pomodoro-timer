export const picker = (
  state = {
    pickerVisible: false,
    valueType: null,
    data: null,
    oldValue: null,
    visibleItemCount: null,
    selectedItemPosition: null,
    isCyclic: false
  },
  action
) => {
  switch (action.type) {
    case 'SHOW_PICKER':
      return {
        pickerVisible: true,
        valueType: action.valueType,
        data: action.data,
        oldValue: action.oldValue,
        visibleItemCount: action.visibleItemCount,
        selectedItemPosition: action.selectedItemPosition,
        isCyclic: action.isCyclic
      };

    case 'HIDE_PICKER':
      return { ...state, pickerVisible: false };

    // case 'SHOW_THEME_PICKER':
    //   return { ...state, themePickerVisible: true };

    // case 'HIDE_THEME_PICKER':
    //   return { ...state, themePickerVisible: false };

    default:
      return state;
  }
};
