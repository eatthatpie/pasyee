export const PasswordStrength = {
    data: {
        password: ''
    },
    setPassword (password) {
        this.password = password
    },
    getStrength: (password) => {
        if (password) {
            this.password = password
        }

        return Math.round(Math.random() * 100)
    }
}