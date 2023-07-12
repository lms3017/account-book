import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountBooks, addAccountBook, deleteAccountBook } from '@/features/accountBook/accountBookSlice';
import { RootState } from '@/store';
import { logOut } from '@/features/auth/authSlice';
import { COUNTRY } from '@/types/constants';
import { User } from 'firebase/auth';

const Logout = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(logOut())}>로그아웃</button>;
};

const AddAccountBook = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user) as User;
  const { loading, error } = useSelector((state: RootState) => state.accountBook);
  const [accountBookName, setAccountBookName] = React.useState('');
  const [selectedCountry, setSelectedCountry] = React.useState<string>(COUNTRY['KOREA'].TYPE);

  const handleAccountBookNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountBookName(e.target.value);
  };
  const handleSelectedCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleAddAccountBook = () => {
    dispatch(addAccountBook({ accountBookId: '', userId: user.uid, accountBookName, country: selectedCountry }));
    setAccountBookName('');
  };

  return (
    <>
      <h2>가게부 등록</h2>
      <div>
        <label>가게부이름 : </label>
        <input value={accountBookName} onChange={handleAccountBookNameChange} />
      </div>
      <div>
        <label>국가 : </label>
        <select value={selectedCountry} onChange={handleSelectedCountryChange}>
          {Object.values(COUNTRY).map((country) => (
            <option key={country.TYPE} value={country.TYPE}>
              {country.NAME}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAddAccountBook} disabled={loading}>
        등록
      </button>
      {error && <p>Error: {error}</p>}
      <div>--------</div>
    </>
  );
};

const AccountBookList = () => {
  const dispatch = useDispatch();
  const { accountBooks, loading, error } = useSelector((state: RootState) => state.accountBook);

  React.useEffect(() => {
    dispatch(fetchAccountBooks());
  }, [dispatch]);

  const handleOpenAccountBook = (accountBookId: string) => {};
  const handleDeleteAccountBook = (accountBookId: string) => {
    dispatch(deleteAccountBook(accountBookId));
  };

  if (accountBooks.length === 0) {
    return (
      <>
        <p>등록된 가게부가 없습니다.</p>
        <div>--------</div>
      </>
    );
  }

  return (
    <>
      <h2>가게부 목록</h2>
      {accountBooks.map((accountBook) => (
        <li key={accountBook.accountBookId}>
          {accountBook.accountBookName}
          <button onClick={() => handleOpenAccountBook(accountBook.accountBookId)} disabled={loading}>
            열기
          </button>
          <button onClick={() => handleDeleteAccountBook(accountBook.accountBookId)} disabled={loading}>
            삭제
          </button>
        </li>
      ))}
      {error && <p>Error: {error}</p>}
      <div>--------</div>
    </>
  );
};

function TestPage() {
  return (
    <>
      <AddAccountBook />
      <AccountBookList />
      <Logout />
    </>
  );
}

export default TestPage;
