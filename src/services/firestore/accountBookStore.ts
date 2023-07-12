import uuid from 'react-uuid';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  query,
  orderBy,
  limit,
  setDoc,
  runTransaction,
} from 'firebase/firestore';
import { db } from '@/configs/firebase';
import { getCurrentDate } from '@/utils/dateHandler';
import { COLLECTIONS } from '@/types/constants';
import { AccountBook, AccountBookMainPage } from '@/types/models';

const fetchAccountBooks = async (): Promise<AccountBookMainPage[]> => {
  const querySnapshot = await getDocs(collection(db, COLLECTIONS.ACCOUNT_BOOK));
  return querySnapshot.docs.map((doc) => {
    const data = doc.data() as AccountBookMainPage;
    return {
      accountBookId: data.accountBookId,
      userId: data.userId,
      accountBookName: data.accountBookName,
      country: data.country,
    };
  });
};

const addAccountBook = async (accountBook: AccountBook): Promise<AccountBookMainPage> => {
  const currentDate = getCurrentDate();
  const accountBookId = uuid();
  accountBook.accountBookId = accountBookId;
  accountBook.createdAt = currentDate;
  accountBook.updatedAt = currentDate;

  const docRef = doc(collection(db, COLLECTIONS.ACCOUNT_BOOK), accountBookId);
  await setDoc(docRef, accountBook);
  return {
    accountBookId: accountBook.accountBookId,
    userId: accountBook.userId,
    accountBookName: accountBook.accountBookName,
    country: accountBook.country,
  };
};

const deleteAccountBook = async (accountBookId: string) => {
  const docRef = doc(collection(db, COLLECTIONS.ACCOUNT_BOOK), accountBookId);
  await deleteDoc(docRef);
};

export { fetchAccountBooks, addAccountBook, deleteAccountBook };
