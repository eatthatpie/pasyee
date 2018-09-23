<template>
    <div class="lengthbar">
        <div class="lengthbar-trace"></div>
        <div class="lengthbar-pointer"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.lengthbar {
    padding: 30px 0 0;
    
    &-trace {
        @include dimensions(100%, 5px);
        background-color: $color-primary-light;
    }

    &-pointer {
        @include dimensions(10px, 10px);
        @include border-radius(50%);
        background-color: $color-primary;
        border: 4px solid $color-default;
        position: relative;
        top: -11px;
        left: 30%;
    }
}
</style>
