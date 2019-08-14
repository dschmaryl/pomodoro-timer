import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

export const store = createStore(
  persistReducer(
    {
      key: 'root',
      storage,
      blacklist: ['picker'],
      timeout: 0,
      version: 0,
      migrate: createMigrate(
        {
          0: state => ({
            timer: {
              ...state.timer,
              numPomodoros: state.timer.numPomodoros || 4
            },
            settings: {
              ...state.settings,
              runInBackground: false,
              notificationIsEnabled: true
            },
            picker: { pickerVisible: false, timePickerVisible: false }
          })
        },
        { debug: true }
      )
    },
    rootReducer
  ),
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
