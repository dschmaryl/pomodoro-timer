import { getMilliseconds } from '../utils';

const basicPomodoro = {
  heading: 'Focus',
  length: getMilliseconds(25, 0),
  breakLength: getMilliseconds(5, 0)
};

const basicPomodoroLongBreak = {
  ...basicPomodoro,
  breakLength: getMilliseconds(15, 0)
};

const initialState = {
  session: [
    { ...basicPomodoro },
    { ...basicPomodoro },
    { ...basicPomodoro },
    { ...basicPomodoroLongBreak }
  ]
};

export const sessions = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SESSION':
      const sessions = [
        ...state.sessions.slice(0, action.position),
        {
          heading: action.heading,
          length: getMilliseconds(action.lengthMinutes, action.lengthSeconds),
          breakLength: getMilliseconds(action.BreakMinutes, action.breakSeconds)
        },
        ...state.sessions.slice(action.position)
      ];
      return { sessions };

    case 'REMOVE_SESSION':
      const sessions = [
        ...state.sessions.slice(0, action.position),
        ...state.sessions.slice(action.position + 1)
      ];
      return { sessions };
  }
};
