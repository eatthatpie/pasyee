import { CharacterRandomizer } from './CharacterRandomizer'
import { Seeder } from './seeders/Seeder'

export const PasswordGenerator = {
    data: {
        constraints: null,
        seeders: null,
        length: 0
    },
    setSeeders (seeders) {
        for (let i in seeders) {
            // @TODO
            // Change this to sth better, consider prototype chain, etc
            if (seeders[i].__proto__ !== Seeder) {
                console.error('Given seeder is not an instance of Seeder object.')
            }
        }

        this.clearSeeders()

        this.data.seeders = seeders

        return this
    },
    clearSeeders () {
        this.data.seeders = null
    },
    setConstraints (constraints) {
        return this
    },
    setLength (length) {
        this.data.length = length

        return this
    },
    generate () {
        let out = '',
            allCharacters = ''

        // @TODO
        // Allow more than at least one occurency of seeder's characters
        for (let i in this.data.seeders) {
            let seederCharacters = this.data.seeders[i].getCharacters()

            out += CharacterRandomizer.getRandomCharacters(seederCharacters, 1)

            allCharacters += seederCharacters
        }

        out += CharacterRandomizer.getRandomCharacters(allCharacters, this.data.length - out.length)

        return CharacterRandomizer.shuffle(out)
    }
}