<!--
currently not in use
-->
<template>
    <div :class="[ 'button-round', { 'is-busy': isBusy } ]">
        <a @click="onClick">
            <slot />
        </a>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: {
        label: {
            type: String,
            default: 'button'
        }
    },
    data () {
        return {
            isBusy: false
        }
    },
    methods: {
        onClick: _.throttle(function () {
            this.isBusy = true 

            this.$emit('click')

            setTimeout (() => {
                this.isBusy = false
            }, 601)
        }, 601)
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.button-round {
    text-align: center;
    padding: 40px 0 10px;

    a {
        @include transition();
        @include dimensions(64px, 64px);
        @include border-radius(50%);
        @include box-shadow(0px 0px 16px rgba(0, 0, 0, 0.2));
        background-color: $color-default;
        color: $color-primary;
        font-family: $font-family-default;
        font-weight: $font-weight-bold;
        cursor: pointer;
        box-sizing: border-box;
        display: inline-block;
        position: relative;
        line-height: 38px;
        font-size: 38px;
        top: -17px;

        &:active {
            @include transform(scale(.95));
        }

        [class^="icon-"] {
            @include position-center-both-axis();
            font-weight: $font-weight-bold;
            color: $color-primary-darker;
            line-height: 38px;
            font-size: 38px;
            left: 50%;
            top: 50%;

            &:before {
                display: inline-block;
            }
        }
    }

    &.is-busy {
        a {
            [class^="icon-"] {
                //&:before {
                    animation-name: fullRotation;
                    animation-duration: .6s;
                    animation-timing-function: ease-in-out;
                //}
            }
        }
    }
}
@keyframes fullRotation {
    0% {
        @include transform(translate(-50%, -50%) rotate(0deg));
    }
    100% {
        @include transform(translate(-50%, -50%) rotate(360deg));
    }
}
</style>