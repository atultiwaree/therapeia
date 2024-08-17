import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';

import authReducer from '../redux/reducers/Auth';

const combined_reducer = combineReducers({
  auth: authReducer,
  [therapeiaApis.reducerPath]: therapeiaApis.reducer,
});

import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {therapeiaApis} from './apis';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persist_reducer = persistReducer(persistConfig, combined_reducer);

const store = configureStore({
  reducer: persist_reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(therapeiaApis.middleware),
});

export default store;
