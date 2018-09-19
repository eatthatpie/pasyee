<template>
    <button class="hamburger" :class="{ 'is-active': isActive }">
        <span v-for="(n, i) in 3" :key="i" />
    </button>
</template>

<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.hamburger {
    @include dimensions(40px, 32px);
    position: absolute;
    background-color: transparent;
    outline: 0;
    border: 0;
    right: $value-container-padding - 5px;
    top: 15px;

    span {
        @include transition();
        @include dimensions(30px, 2px);
        background-color: $color-default;
        position: absolute;
        left: 5px;
        
        &:nth-child(1) {
            top: 5px;
        }

        &:nth-child(2) {
            top: 15px;
        }

        &:nth-child(3) {
            top: 25px;
        }
    }

    &.is-active {
        span {
            &:nth-child(1) {
                @include transform(translateY(10px) rotate(-45deg));
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:nth-child(3) {
                @include transform(translateY(-10px) rotate(45deg));
            }
        }
    }

    .is-nav-open & {
        span {
            background-color: $color-primary;
        }
    }
}
</style>
