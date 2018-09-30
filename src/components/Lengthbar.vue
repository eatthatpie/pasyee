<template>
    <div 
        :class="[ 'lengthbar', { 'is-dragging': isDragging } ]"
        @touchstart="onStart"
        @touchend="onEnd"
        @touchmove="onMove"
    >
        <div class="lengthbar-trace"></div>
        <div class="lengthbar-pointer" ref="pointer" :style="{ 'left': position + 'px' }">
            <div class="lengthbar-label">
                <div class="lengthbar-label-frame">
                    <div class="lengthbar-label-list" :style="{ transform: 'translateY(-' + lengthListPosition + 'px)' }">
                        <span v-for="i in max" :key="i" v-text="i" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: {
        min: {
            type: Number,
            default: 6,
            validate: v => v > 0
        },
        max: {
            type: Number,
            default: 50
        },
        default: {
            type: Number,
            default: 9,
            validate: v => v >= this.min && v <= this.max
        }
    },
    data () {
        return {
            length: this.default,
            isDragging: false,
            position: 100
        }
    },
    computed: {
        lengthListPosition () {
            return (this.length - 1) * 17
        },
        minMaxFactor () {
            let ratio = this.max / this.min

            return (ratio - 1) / ratio
        }
    },
    methods: {
        onStart () {
            this.isDragging = true
        },
        onEnd () {
            this.isDragging = false

            this.$emit('change', this.length)
        },
        onMove: _.throttle(function (e) {
            if (this.isDragging) {
                let offsetLeft = e.srcElement.offsetLeft,
                    relativeX = e.changedTouches[0].pageX - offsetLeft

                relativeX = relativeX > 320 ? 320 : relativeX
                relativeX  = relativeX < 0 ? 0 : relativeX

                this.position = (relativeX * 302) / 320

                this.length = Math.ceil(this.max * relativeX * this.minMaxFactor / 320) + this.min
            }
        }, 10)
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.lengthbar {
    padding: 44px 0 15px;

    &:before {
        @include transition();
        @include position-fixed-cover();
        content: '';
        background-color: $color-primary-dark;
        visibility: hidden;
        opacity: 0;
        z-index: 1;
    }
    
    &-trace {
        @include transition();
        @include dimensions(100%, 5px);
        background-color: $color-primary-light;
        position: relative;
        z-index: 2;
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
        z-index: 2;
    }

    &-label {
        @include border-radius(5px);
        @include transform-origin(50%, 135%);
        @include transition();
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

        &-frame {
            overflow: hidden;
            height: 17px; 
        }

        &-list {
            @include dimensions(100%, 17px);
            @include transition(.15s);
            display: inline-block;

            > span {
                @include no-highlight();
                display: block;
                height: 17px;
            }
        }
    }

    &.is-dragging {
        &:before {
            visibility: visible;
            opacity: .5;
        }
    }

    &.is-dragging & {
        &-trace {
            background-color: $color-default;
        }

        &-label {
            @include transform(scale(3));
        }
    }
}
</style>
