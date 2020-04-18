<template>
    <div id="root">
        <layout-header :scroll-direction="scrollDirection" :scroll-y="scrollY" />
        <layout-main />
        <layout-footer />
    </div>
</template>

<script>
import throttle from 'lodash/throttle'
import LayoutHeader from './layout/LayoutHeader'
import LayoutMain from './layout/LayoutMain'
import LayoutFooter from './layout/LayoutFooter'

export default {
    components: {
        LayoutHeader, LayoutMain, LayoutFooter
    },
    data () {
        return {
            scrollDirection: 0,
            scrollY: 0
        }
    },
    created () {
        window.addEventListener('scroll', this.onScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll: throttle(function (e) {
            this.scrollDirection = window.scrollY - this.scrollY > 0 ? 1 : -1
            this.scrollY = window.scrollY
        }, 100)
    }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';

#root {
    &:before {
        content: '';
        @include position-fixed-cover();
        background: $color-primary linear-gradient(135deg, $color-primary, $color-primary-darker, $color-primary-dark);
        bottom: -80px;
        top: -80px;
    }
}
</style>