<template>
    <div class="filters">
        other filters
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.filters {
    background-color: $color-primary-light;
    text-align: center;
    padding: 5px 0 5px;

    [class^="icon-"] {
        font-size: 32px;
    }
}
</style>
