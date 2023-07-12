import { Timestamp } from 'firebase/firestore';

type AccountBook = {
  accountBookId: string; // 가게부 아이디
  userId: string; // 유저 아이디
  accountBookName: string; // 가게부이름
  country: string; // 국가
  expenses: {
    description: string; // 내역
    amount: number; // 금액
    creditCard: { creditCardId: string; creditCardName: string }; // 신용카드
    bankBook: { bankBookId: string; bankBookName: string }; // 은행
    categories: string; // 카테고리
    sharedGroup: { sharedGroupId: string; sharedGroupName: string }; // 공유그룹
    isPayed: boolean; // 지불여부
    createdAt: Timestamp | null;
    updatedAt: Timestamp | null;
  }[];
  incomes: {
    description: string; // 내역
    amount: number; // 금액
    bankBook: { bankBookId: string; bankBookName: string }; // 은행
    categories: string;
    createdAt: Timestamp | null;
    updatedAt: Timestamp | null;
  }[];
  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
};

type AccountBookMainPage = {
  accountBookId: string; // 가게부 아이디
  userId: string; // 유저 아이디
  accountBookName: string; // 가게부이름
  country: string; // 국가
};

type AccountBookState = {
  accountBooks: AccountBookMainPage[];
  loading: boolean;
  error: string | null;
};

export type { AccountBook, AccountBookState, AccountBookMainPage };
