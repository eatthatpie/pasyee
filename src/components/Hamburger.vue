<template>
    <button 
        :class="[
            'hamburger',
            { 'is-active': isActive }
        ]"
        aria-label="Menu"
    >
        <div class="hamburger-overlay" />
        <div>
            <span v-for="(n, i) in 3" :key="i" />
        </div>
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
    cursor: pointer;
    outline: 0;
    border: 0;
    right: $value-container-padding - 5px;
    top: 15px;

    &-overlay {
        @include transition(.1s);
        @include transform(scale(.61));
        @include border-radius(50%);
        @include dimensions(54px);
        background-color: $color-secondary;
        position: absolute;
        display: none;
        top: -11px;
        left: -7px;
        opacity: 0;
    }

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

    &:hover & {
        &-overlay {
            @include transform(none);
            opacity: .39;
        }

        .is-nav-open & {
            &-overlay {
                opacity: .1;
            }
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

    @media (min-width: $screen-laptop) {
        right: $value-container-padding-desktop - 5px;
        top: 30px;

        &-overlay {
            display: block;
        }
    }
}
</style>
