<template>
    <div :class="[ 'password', { 'is-busy': isBusy } ]">
        <div class="password-container">
            <div class="password-letters">
                {{ password }}
            </div>
            <loader :is-busy="isBusy" />
        </div>
        <div class="password-pointer">
            <i class="icon-point-up"/>
        </div>
    </div>
</template>

<script>
import Loader from './Loader'

export default {
    components: {
        Loader
    },
    data () {
        return {
            password: '..poipoi6B^#',
            isBusy: false
        }
    },
    mounted () {
        setInterval(() => {
            this.isBusy = true 

            setTimeout(() => {
                this.isBusy = false
            }, 1000)
        }, 2000)
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.password {
    font-family: $font-family-password;
    font-size: $font-size-password;
    text-align: center;
    position: relative;
    padding: 25px 0 40px;

    &-container {
        position: relative;
    }

    &-letters {
        @include transition(.3s);
        @include transform(scale(1));
        display: inline-block;
        visibility: visible;
        opacity: 1;
    }

    &-pointer {
        @include dimensions(40px, 40px);
        @include border-radius(50%);
        background-color: rgba($color-primary-dark, .3);
        position: absolute;
        left: 61%;
        bottom: 12px;

        [class^="icon-"] {
            position: absolute;
            top: 8px;
            left: 7px;
            font-size: 24px;
        }
    }

    &.is-busy & {
        &-letters {
            @include transform(scale(.8));
            visibility: hidden;
            opacity: 0;
        }
    }
}
</style>
