<template>
    <main class="layout-main">
        <div class="container">
            <contents>
                <div class="contents-center">
                    <!-- <h3>Need password ideas?</h3>
                    <h3>Why not just generate some?</h3> -->
                    <h2>Generate Password</h2>

                    <p>Your password strength</p>
                    <dynamometer :power="71" />
                </div>
            </contents>

            <password />

            <lengthbar />

            <button-round label="refresh" />

            <filters />
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
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.layout-main {
    padding: 30px 0 0;
}
</style>
