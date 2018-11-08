<template>
    <div id="root">
        <layout-header />
        <layout-main />
        <layout-footer />
    </div>
</template>

<script>
import LayoutHeader from './layout/LayoutHeader'
import LayoutMain from './layout/LayoutMain'
import LayoutFooter from './layout/LayoutFooter'

export default {
    components: {
        LayoutHeader, LayoutMain, LayoutFooter
    }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>