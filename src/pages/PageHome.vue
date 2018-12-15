<template>
    <div class="__page">
        <div class="container container-slim space">
            <contents>
                <div class="contents-center">
                    <h1 class="contents-lead">Generate Password</h1>

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

            <button-generate label="generate" @click="onRefreshButtonClick" />
        </div>

        <alert ref="alert" />
    </div>
</template>

<script>
import Alert from './../components/Alert'
import ButtonGenerate from './../components/ButtonGenerate'
import Contents from './../components/Contents'
import Dynamometer from './../components/Dynamometer'
import Filters from './../components/Filters'
import Lengthbar from './../components/Lengthbar'
import Password from './../components/Password'

export default {
    components: {
        Alert, ButtonGenerate, Contents, Dynamometer, Filters, Lengthbar, Password
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