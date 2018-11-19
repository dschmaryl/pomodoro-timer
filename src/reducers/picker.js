export const picker = (
  state = { pickerVisible: false, timePickerVisible: false },
  action
) => {
  switch (action.type) {
    case 'SHOW_TIME_PICKER':
      return {
        pickerVisible: false,
        timePickerVisible: true,
        sessionType: action.sessionType,
        oldTime: action.oldTime
      };

    case 'SHOW_PICKER':
      return {
        timePickerVisible: false,
        pickerVisible: true,
        valueType: action.valueType,
        headerText: action.headerText,
        data: action.data,
        selectedItemPosition: action.selectedItemPosition,
        visibleItemCount: action.visibleItemCount,
        isCyclic: action.isCyclic
      };

    case 'HIDE_PICKER':
      return { pickerVisible: false, timePickerVisible: false };

    default:
      return state;
  }
};
