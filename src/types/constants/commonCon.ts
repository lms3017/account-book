const COUNTRY = {
  KOREA: { TYPE: 'korea', NAME: '한국' },
  JAPAN: { TYPE: 'japan', NAME: '일본' },
} as const;

const BANK_BOOK = {
  [COUNTRY.KOREA.TYPE]: {
    HANA_BANK: '하나은행',
    KOOKMIN_BANK: '국민은행',
  },
  [COUNTRY.JAPAN.TYPE]: {
    SMBC_BANK: 'SMBC은행',
    UFJ_BANK: 'UFJ은행',
  },
} as const;

export { COUNTRY, BANK_BOOK };
