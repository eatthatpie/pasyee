<template>
    <div class="password">
        <div class="password-letters">
            ..poipoi6B^#
        </div>
        <div class="password-pointer">
            <i class="icon-point-up"/>
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

.password {
    font-family: $font-family-password;
    font-size: $font-size-password;
    text-align: center;
    position: relative;
    padding: 25px 0 40px;

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
}
</style>
