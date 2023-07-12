import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountBook, AccountBookState, AccountBookMainPage } from '@/types/models/accountBook';

const initAccountBookState: AccountBookState = {
  accountBooks: [],
  loading: false,
  error: null,
};

const accountBookSlice = createSlice({
  name: 'accountBook',
  initialState: initAccountBookState,
  reducers: {
    // 생성된 가게부 정보 취득
    fetchAccountBooks(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAccountBooksSuccess(state, action: PayloadAction<AccountBookMainPage[]>) {
      state.accountBooks = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchAccountBooksFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // 가게부 추가
    addAccountBook(state, action: PayloadAction<AccountBookMainPage>) {
      state.loading = true;
      state.error = null;
    },
    addAccountBookSuccess(state, action: PayloadAction<AccountBookMainPage>) {
      state.accountBooks.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addAccountBookFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // 가게부 삭제
    deleteAccountBook(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteAccountBookSuccess(state, action: PayloadAction<string>) {
      state.accountBooks = state.accountBooks.filter((accountBook) => accountBook.accountBookId !== action.payload);
      state.loading = false;
      state.error = null;
    },
    deleteAccountBookFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAccountBooks,
  fetchAccountBooksSuccess,
  fetchAccountBooksFailure,
  addAccountBook,
  addAccountBookSuccess,
  addAccountBookFailure,
  deleteAccountBook,
  deleteAccountBookSuccess,
  deleteAccountBookFailure,
} = accountBookSlice.actions;

export default accountBookSlice.reducer;
