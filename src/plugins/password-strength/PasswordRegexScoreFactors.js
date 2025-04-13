export const PasswordRegexScoreFactors = {
  default: {
    regex: /[a-z]/g,
    factor: 4,
    maxDistinctCharacterOccurencies: 2,
  },
  capitalCharacters: {
    regex: /[A-Z]/g,
    factor: 12,
    maxDistinctCharacterOccurencies: 2,
  },
  numbers: {
    regex: /[0-9]/g,
    factor: 8,
    maxDistinctCharacterOccurencies: 2,
  },
  lightSpecials: {
    regex: /!|#|\$|\^|-|_/g,
    factor: 16,
    maxDistinctCharacterOccurencies: 2,
  },
  heavySpecials: {
    regex: /\@|\%|\&|\*|\(|\)|\+|\=|\||\,|\.|\<|\>|\/|\?|\;|\:|\{|\}|\[|\]/g,
    factor: 20,
    maxDistinctCharacterOccurencies: 2,
  },
};
