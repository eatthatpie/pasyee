<template>
    <div class="lengthbar">
        <div class="lengthbar-trace"></div>
        <div class="lengthbar-pointer">
            <div class="lengthbar-label">9</div>
        </div>
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
    padding: 44px 0 15px;
    
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
        box-sizing: content-box;
        top: -11px;
        left: 30%;
    }

    &-label {
        @include border-radius(5px);
        background-color: $color-default;
        color: $color-secondary;
        font-weight: $font-weight-bold;
        text-align: center;
        position: relative;
        padding: 2px 0;
        width: 34px;
        bottom: 34px;
        left: -12px;
        font-size: 15px;

        &:after {
            @include dimensions(0, 0);
            content: '';
            position: absolute;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 8px solid $color-default;
            top: 20px;
            left: 12px;
        }
    }
}
</style>
