export const notification = (
  state = {
    notificationIsEnabled: true,
    notificationIsScheduled: false,
    notificationClicked: false
  },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_NOTIFICATION_ENABLED':
      return { ...state, notificationIsEnabled: !state.notificationIsEnabled };

    case 'TOGGLE_NOTIFICATION_SCHEDULED':
      return {
        ...state,
        notificationIsScheduled: !state.notificationIsScheduled
      };

    case 'TOGGLE_NOTIFICATION_CLICKED':
      return {
        ...state,
        notificationClicked: !state.notificationClicked
      };

    default:
      return state;
  }
};
