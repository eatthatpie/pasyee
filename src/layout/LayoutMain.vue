<template>
    <main class="layout-main">
        <div class="container">
            <contents>
                <div class="contents-center">
                    <!-- <h3>Need password ideas?</h3>
                    <h3>Why not just generate some?</h3> -->
                    <h2>Generate Password</h2>

                    <dynamometer :power="dummyPower" />
                    <p class="contents-small">Strength</p>
                </div>
            </contents>

            <password @copy="onPasswordCopy" />

            <lengthbar :min="6" :max="32" @change="onLengthChange" />

            <filters />

            <button-round @click="onRefreshButtonClick">
                <i class="icon-loop2"/>
            </button-round>
        </div>

        <alert ref="alert" />
    </main>
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
            dummyPower: 71
        }
    },
    methods: {
        onLengthChange (length) {
            console.log('Password\'s length changed to ' + length)
        },
        onRefreshButtonClick () {
            console.log('Refresh button clicked')
        },
        onPasswordCopy () {
            this.$refs.alert.open('Password copied. Remember to remove it from the clipboard ASAP.')
        }
    },
    mounted () {
        setInterval(() => {
            this.dummyPower = Math.ceil(100 * Math.random())
        }, 1000)
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.layout-main {
    position: relative;
    padding: 20px 0 0;
    z-index: 2;
}
</style>
