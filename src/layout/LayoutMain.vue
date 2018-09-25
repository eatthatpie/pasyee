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

            <password />

            <lengthbar />

            <filters />

            <button-round>
                <i class="icon-loop2"/>
            </button-round>
        </div>
    </main>
</template>

<script>
import ButtonRound from './../components/ButtonRound'
import Contents from './../components/Contents'
import Dynamometer from './../components/Dynamometer'
import Filters from './../components/Filters'
import Lengthbar from './../components/Lengthbar'
import Password from './../components/Password'

export default {
    components: {
        ButtonRound, Contents, Dynamometer, Filters, Lengthbar, Password
    },
    data () {
        return {
            dummyPower: 71
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
    padding: 20px 0 0;
}
</style>
