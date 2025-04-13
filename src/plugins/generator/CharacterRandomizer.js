export const CharacterRandomizer = {
  /**
   * @param string characters
   * @param integer length
   * @return string
   */
  getRandomCharacters(characters, length) {
    return this.shuffle(characters).substring(0, length);
  },

  /**
   * Modern Fisher–Yates shuffle algorithm
   *
   * @param string hash
   * @return string
   */
  shuffle(hash) {
    let out = hash.split("");

    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const x = out[i];
      out[i] = out[j];
      out[j] = x;
    }

    return out.join("");
  },
};
