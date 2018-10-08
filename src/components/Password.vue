<template>
    <div :class="[ 'password', { 'is-busy': isBusy, 'is-hint': isHint } ]">
        <div class="password-container" @click="onClick">
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
            isBusy: false,
            isHint: true
        }
    },
    methods: {
        onClick () {
            this.stopHintAnimation()
            this.$copyText(this.password)
            this.$emit('copy')
        },
        stopHintAnimation () {
            this.isHint = false
        }
    },
    mounted () {
        // setInterval(() => {
        //     this.isBusy = true 

        //     setTimeout(() => {
        //         this.isBusy = false
        //     }, 1000)
        // }, 2000)
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
        display: none;
        left: calc(50% - 20px);
        bottom: 15px;

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

    &.is-hint & {
        &-letters {
            animation-name: hintLetters;
            animation-duration: 2.5s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
        }

        &-pointer {
            display: block;
            animation-name: hintCursor;
            animation-duration: 2.5s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
        }
    }
}

@keyframes hintCursor {
    0% { @include transform(translateY(15px)); opacity: 0; }
    10% { opacity: 1; }
    30% { @include transform(translateY(0)); }
    35% { @include transform(none); }
    42% { @include transform(scale(.9) translateY(-5px)); }
    50% { @include transform(none); }
    60% { opacity: 1; }
    70% { opacity: 0; }
    100% { opacity: 0; }
}

@-webkit-keyframes hintCursor {
    0% { @include transform(translateY(15px)); opacity: 0; }
    10% { opacity: 1; }
    30% { @include transform(translateY(0)); }
    35% { @include transform(none); }
    45% { @include transform(scale(.9) translateY(-5px)); }
    55% { @include transform(none); }
    60% { opacity: 1; }
    70% { opacity: 0; }
    100% { opacity: 0; }
}

@keyframes hintLetters {
    0% { @include transform(none); }
    40% { @include transform(none); }
    45% { @include transform(scale(.99)); }
    50% { @include transform(none); }
    100% { @include transform(none); }
}

@-webkit-keyframes hintLetters {
    0% { @include transform(none); }
    40% { @include transform(none); }
    45% { @include transform(scale(.99)); }
    50% { @include transform(none); }
    100% { @include transform(none); }
}
</style>
