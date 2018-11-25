<template>
    <div class="__page">
        <div class="container">
            <contents>
                <div class="contents-center">
                    <h2>Generate Password</h2>

                    <dynamometer :power="strength" />
                    <p class="contents-small">Strength</p>
                </div>
            </contents>

            <password 
                ref="password" 
                :length="password.length" 
                :seeders="password.seeders" 
                @copy="onPasswordCopy" 
                @change="onPasswordChange" 
            />

            <lengthbar 
                :func="x => 26 * x * x + 6"
                :pointer-position-start-x="0.34"
                v-model="password.length" 
                @change="onPasswordLengthChange" 
            />

            <filters ref="filters" />

            <button-round @click="onRefreshButtonClick">
                <i class="icon-loop2"/>
            </button-round>
        </div>

        <alert ref="alert" />
    </div>
</template>

<script>
import Alert from './../components/Alert'
import ButtonRound from './../components/ButtonRound'
import Contents from './../components/Contents'
import Dynamometer from './../components/Dynamometer'
import Filters from './../components/Filters'
import Lengthbar from './../components/Lengthbar'
import Password from './../components/Password'

export default {
    components: {
        Alert, ButtonRound, Contents, Dynamometer, Filters, Lengthbar, Password
    },
    data () {
        return {
            strength: 0,
            password: {
                length: 9,
                seeders: []
            }
        }
    },
    mounted () {
        this.generatePassword()

        this.$refs.alert.open('You can add Pasyee to your Home Screen now.')
    },
    methods: {
        generatePassword () {
            this.password.seeders = this.$refs.filters.getCharactersFilters()
            this.$refs.password.generate()
        },
        onRefreshButtonClick () {
            setTimeout(() => {
                this.$refs.filters.close()
            }, 100)

            this.generatePassword()
        },
        onPasswordLengthChange () {
            this.generatePassword()
        },
        onPasswordCopy () {
            this.$refs.alert.open('Password copied. Remember to remove it from the clipboard ASAP.')
        },
        onPasswordChange (data) {
            this.strength = data.strength
        }
    }
}
</script>