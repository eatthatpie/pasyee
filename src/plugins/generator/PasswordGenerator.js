export const PasswordGenerator = {
    data: {
        constraints: null,
        characters: '',
        length: 0
    },
    setSeeders (seeds) {
        this.clearSeeders()
        
        for (let i in seeds) {
            this.data.characters += seeds[i].characters
        }

        return this
    },
    clearSeeders () {
        this.data.characters = ''
    },
    setConstraints (constraints) {
        return this
    },
    setLength (length) {
        this.data.length = length

        return this
    },
    generate () {
        let out = ''

        for (let i = 0; i <= this.data.length; i++) {
            let index = Math.round(Math.random() * (this.data.characters.length - 1))
            out += this.data.characters[index]
        }

        return out
    }
}