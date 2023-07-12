type User = {
  userId: string; // 유저 아이디
  email: string; // 이메일
  displayName: string; // 닉네임
  photoURL: string | null; // 프로필 이미지 Url
};

type BankBooks = {
  userId: string; // 유저 아이디
  bankBookId: string; // 통장 아이디
  bankBookNumber: number; // 통장 번호
  bankBookName: string; // 통장 이름
  country: string; // 국가
  bankName: string; // 은행 이름
  isUse: boolean; // 사용 여부
}[];

type CreditCards = {
  creditCardId: string; // 신용카드 아이디
  userId: string; //소유자 아이디
  creditCardNumber: number; //신용카드 번호
  creditCardName: string; // 신용카드 명
  country: string; // 국가
  linkedBankBook: string; // 연결 은행명
  isUse: boolean; // 사용여부
  sharedUser: {
    sharedUseId: String; // 연결된 유저 아이디
  }[];
}[];

type SharedGroups = {
  userId: string; //유저 아이디
  groupId: string; // 그룹 아이디
  isOwner: boolean; // 생성자 인지
  groupNumber: number; // 그룹 번호
  groupName: string; // 그룹 이름
  groupAuth: string; // 그룹 권한 // 전체허용 | 읽기허용
}[];

type FixedExpenditure = {};

type FixedIncome = {};

type AccountBooks = {
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
    createdAt: Date;
    updatedAt: Date;
  }[];
  incomes: {
    description: string; // 내역
    amount: number; // 금액
    bankBook: { bankBookId: string; bankBookName: string }; // 은행
    categories: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}[];
