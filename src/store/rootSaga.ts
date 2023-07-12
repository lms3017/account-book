import { all } from 'redux-saga/effects';
import { tempItemSaga } from '@/features/_tempItem/tempItemSaga';
import { authSaga } from '@/features/auth/authSaga';
import { accountBookSaga } from '@/features/accountBook/accountBookSaga';

function* rootSaga() {
  yield all([tempItemSaga(), authSaga(), accountBookSaga()]);
}

export default rootSaga;
