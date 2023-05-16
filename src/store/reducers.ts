import { combineReducers } from '@reduxjs/toolkit';
import {userReducer} from './user/user.reducer';
import profileReducer from './profile/profileSlice';

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
});

export default rootReducer;
