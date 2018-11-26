import { PasswordRegexPenaltyFactors } from './PasswordRegexPenaltyFactors'
import { PasswordRegexScoreFactors } from './PasswordRegexScoreFactors'

export const PasswordStrength = {
    data: {
        password: ''
    },
    setPassword (password) {
        this.password = password
    },
    getStrength (password) {
        if (password) {
            this.setPassword(password)
        } 

        let strength = 0

        let regexFactorsArray = [].concat(
            Object.values(PasswordRegexScoreFactors), 
            Object.values(PasswordRegexPenaltyFactors)
        )

        for (let i in regexFactorsArray) {
            let prf = regexFactorsArray[i],
                characterMatches = this.password.match(prf.regex)

            if (characterMatches === null) {
                continue;
            }
    
            let length = characterMatches.length

            if (prf.maxDistinctCharacterOccurencies) {
                let maxLength = this.getDistinctCharacters(characterMatches).length * prf.maxDistinctCharacterOccurencies

                length = characterMatches.length > maxLength ? maxLength : characterMatches.length
            }

            strength += length * prf.factor
        }

        return strength > 100 ? 100 : strength
    },
    getDistinctCharacters (characters) {
        return characters.filter((v, i, self) => {
            return self.indexOf(v) === i
        })
    }
}