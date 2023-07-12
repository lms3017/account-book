import { takeLatest, call, put } from 'redux-saga/effects';
import {
  fetchAccountBooks,
  fetchAccountBooksSuccess,
  fetchAccountBooksFailure,
  addAccountBook,
  addAccountBookSuccess,
  addAccountBookFailure,
  deleteAccountBook,
  deleteAccountBookSuccess,
  deleteAccountBookFailure,
} from './accountBookSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { AccountBook, AccountBookMainPage } from '@/types/models';
import { initAccountBook } from '@/types/constants';
import * as store from '@/services/firestore';

function* fetchAccountBooksSaga() {
  try {
    const accountBookMainPage: AccountBookMainPage[] = yield call(store.fetchAccountBooks);
    yield put(fetchAccountBooksSuccess(accountBookMainPage));
  } catch (error: any) {
    yield put(fetchAccountBooksFailure(error.message));
  }
}

function* addAccountBookSaga(action: PayloadAction<AccountBookMainPage>) {
  try {
    const { userId, accountBookName, country } = action.payload;
    const accountBook = {
      ...initAccountBook,
      userId,
      accountBookName,
      country,
    };
    const addAccountBook: AccountBookMainPage = yield call(store.addAccountBook, accountBook);
    yield put(addAccountBookSuccess(addAccountBook));
  } catch (error: any) {
    yield put(addAccountBookFailure(error.message));
  }
}

function* deleteAccountBookSaga(action: PayloadAction<string>) {
  try {
    yield call(store.deleteAccountBook, action.payload);
    yield put(deleteAccountBookSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteAccountBookFailure(error.message));
  }
}

export function* accountBookSaga() {
  yield takeLatest(fetchAccountBooks.type, fetchAccountBooksSaga);
  yield takeLatest(addAccountBook.type, addAccountBookSaga);
  yield takeLatest(deleteAccountBook.type, deleteAccountBookSaga);
}
