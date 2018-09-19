<template>
    <header class="layout-header" :class="{ 'is-nav-open': isNavOpen }">
        <div class="container">
            <div class="layout-header-flex">
                <logo />
                <hamburger :is-active="isNavOpen" @click.native="toggleNav" />
            </div>
            <navigation />
        </div>
    </header>
</template>

<script>
import Hamburger from './../components/Hamburger'
import Logo from './../components/Logo'
import Navigation from './../components/Navigation'

export default {
    components: {
        Hamburger, Logo, Navigation
    },
    data () {
        return {
            isNavOpen: false
        }
    },
    methods: {
        toggleNav () {
            this.isNavOpen = !this.isNavOpen
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.layout-header {
    height: $value-header-height;
    position: relative;
    z-index: 1;

    &:before {
        @include position-fixed-cover();
        @include transition(.5s);
        background-color: $color-default;
        visibility: hidden;
        z-index: -1;
        opacity: 0;
        content: '';
    }

    &-flex {
        display: flex;
        justify-content: center;
    }

    &.is-nav-open {
        &:before {
            visibility: visible;
            opacity: 1;
        }
    }
}
</style>
