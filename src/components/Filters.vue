<template>
    <div :class="[ 'filters', { 'is-open': isOpen } ]" @click="isOpen = !isOpen">
        <a class="filters-label">characters... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   easy to...</a>
        <div class="filters-placeholder">
            <div class="filters-leaf">
                <div class="filters-item">
                    letters <i class="icon-checkmark" />
                </div>
                <div class="filters-item">
                    numbers <i class="icon-checkmark" />
                </div>
                <div class="filters-item" style="opacity: .3">
                    light specials <i class="icon-checkmark" />
                </div>
                <div class="filters-item" style="opacity: .3">
                    heavy specials <i class="icon-checkmark" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isOpen: false
        }
    },
    methods: {
        close () {
            this.isOpen = false
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.filters {
    @include transition(.3s);
    background-color: $color-primary-light;
    position: relative;
    height: 33px;

    &:before {
        @include transition(.2s);
        @include position-fixed-cover();
        content: '';
        background-color: $color-primary-dark;
        visibility: hidden;
        opacity: 0;
    }

    &-placeholder {
        @include position-cover();
        pointer-events: none;
        text-align: center;
        overflow: hidden;
        top: auto;
        height: 196px;
    }

    &-leaf {
        @include transition(.2s);
        @include position-cover();
        background-color: $color-primary-light;
        pointer-events: all;
        top: 100%;
        height: 100%;
        padding: 20px;
        z-index: 2;
    }

    &-label {
        @include transition();
        @include transition-delay(.2s);
        color: $color-default;
        text-align: center;
        display: block;
        padding: 5px 0 0;
        height: 33px;
    }

    &-item {
        @include transition();
        color: $color-default;
        padding: 3px 0;
        opacity: 0;
    }

    &.is-open {
        //background-color: $color-default;

        &:before {
            @include transition(.3s);
            visibility: visible;
            opacity: .5;
        }
    }

    &.is-open & {
        &-leaf {
            @include transition(.3s);
            @include transform(translateY(calc(33px - 100%)));
            //background-color: $color-default;
        }

        &-label {
            opacity: 0;
        }

        &-item {
            opacity: 1;
        }
    }
}
</style>
