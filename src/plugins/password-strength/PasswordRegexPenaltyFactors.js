export const PasswordRegexPenaltyFactors = {
  sameCharactersNextToEachOther: {
    regex: /(\w)\1+/g,
    factor: -2,
  },
};
