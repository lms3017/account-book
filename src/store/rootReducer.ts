import { combineReducers } from '@reduxjs/toolkit';
import tempItemReducer from '@/features/_tempItem/tempItemSlice';
import authReducer from '@/features/auth/authSlice';
import accountBookReducer from '@/features/accountBook/accountBookSlice';

const rootReducer = combineReducers({
  tempItem: tempItemReducer,
  auth: authReducer,
  accountBook: accountBookReducer,
});

export default rootReducer;
