export const picker = (
  state = {
    pickerVisible: false,
    valueType: null,
    data: null,
    selectedItemPosition: null,
    visibleItemCount: null,
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
        selectedItemPosition: action.selectedItemPosition,
        visibleItemCount: action.visibleItemCount,
        isCyclic: action.isCyclic
      };

    case 'HIDE_PICKER':
      return { ...state, pickerVisible: false };

    default:
      return state;
  }
};
