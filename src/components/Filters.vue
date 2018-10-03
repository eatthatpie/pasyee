<template>
    <div :class="[ 'filters', { 'is-open': isOpen } ]">
        <div class="filters-labels">
            <a class="filters-label" @click="isCharactersOpen = true">
                <span>characters...</span>
            </a>
            <a class="filters-label" @click="isEasyToOpen = true">
                <span>easy to...</span>
            </a>
        </div>
        <div class="filters-placeholder" v-click-outside="onClickOutsidePlaceholder">
            <div :class="[ 'filters-leaf', { 'is-open': isCharactersOpen } ]">
                <div class="filters-list">
                    <div class="filters-item is-active">
                        letters <i class="icon-checkmark" />
                    </div>
                    <div class="filters-item is-active">
                        numbers <i class="icon-checkmark" />
                    </div>
                    <div class="filters-item">
                        light specials <i class="icon-checkmark" />
                    </div>
                    <div class="filters-item">
                        heavy specials <i class="icon-checkmark" />
                    </div>
                </div>
            </div>
            <div class="filters-leaf" :class="{ 'is-open': isEasyToOpen }">
                <div class="filters-list">
                    <div class="filters-item is-active">
                        write <i class="icon-checkmark" />
                    </div>
                    <div class="filters-item">
                        read <i class="icon-checkmark" />
                    </div>
                    <div class="filters-item">
                        remember <i class="icon-checkmark" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    directives: {
        ClickOutside
    },
    data () {
        return {
            isCharactersOpen: false,
            isEasyToOpen: false
        }
    },
    computed: {
        isOpen () {
            return this.isCharactersOpen || this.isEasyToOpen
        }
    },
    methods: {
        close () {
            this.isCharactersOpen = false
            this.isEasyToOpen = false
        },
        onClickOutsidePlaceholder (e) {
            if (e.target.className != 'filters-label' && e.target.parentNode.className != 'filters-label') {
                this.close()
            }
        }
    },
    watch: {
        isCharactersOpen () {
            if (this.isCharactersOpen) {
                this.isEasyToOpen = false
            }
        }, 
        isEasyToOpen () {
            if (this.isEasyToOpen) {
                this.isCharactersOpen = false
            }
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.filters {
    @include transition(.3s);
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
        opacity: 0;
        z-index: 2;
    }

    &-labels {
        display: flex;
        justify-content: space-between;
    }

    &-label {
        color: $color-default;
        background-color: $color-primary-light;
        text-align: center;
        display: block;
        width: calc(50% - 5px);
        padding: 5px 0 0;
        height: 33px;

        span {
            @include transition();
            @include transition-delay(.1s);
            opacity: 1;
        }
    }

    &-list {
        @include position-center-vertically(-19px);
        position: absolute;
        left: 0;
        right: 0;
    }

    &-item {
        @include transition();
        color: $color-default;
        font-weight: $font-weight-bold;
        padding: 3px 0;
        opacity: 0;

        [class^="icon-"] {
            margin-left: 5px;
        }
    }

    &.is-open {
        &:before {
            @include transition(.3s);
            visibility: visible;
            opacity: .5;
        }
    }

    &.is-open & {
        &-leaf {
            &.is-open {
                @include transition(.3s);
                @include transform(translateY(calc(33px - 100%)));
                opacity: 1;
            }
        }

        &-label {
            span {
                opacity: 0;
            }
        }

        &-item {
            opacity: .3;

            &.is-active {
                opacity: 1;
            }
        }
    }
}
</style>
