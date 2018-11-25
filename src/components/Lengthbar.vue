<template>
    <div 
        :class="[ 'lengthbar', { 'is-dragging': isDragging } ]"
        @mousedown="onStart"
        @mouseup="onEnd"
        @mousemove="onMove"
        @touchstart="onStart"
        @touchend="onEnd"
        @touchmove="onMove"
    >
        <div class="lengthbar-trace"></div>
        <div class="lengthbar-pointer" ref="pointer" :style="{ 'left': pointerPositionX + 'px' }">
            <div class="lengthbar-label">
                <div class="lengthbar-label-frame">
                    <div class="lengthbar-label-list" :style="{ transform: 'translateY(-' + labelPositionY + 'px)' }">
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
        /**
         * Counting range <0; 1>
         * The function has to have only positive values in range <0; 1>
         * The function has to be growing
         */
        func: {
            type: Function,
            required: false,
            default: null,
            validate: v => true // @TODO
        },
        pointerPositionStartX: {
            type: Number,
            required: false,
            default: 100,
            validate: v => v >= 0 && v <= 1
        },
        value: {
            type: Number,
            default: 9,
            validate: v => v >= this.min && v <= this.max
        }
    },
    data () {
        return {
            length: this.value,
            isDragging: false,
            pointerPositionX: 0
        }
    },
    computed: {
        labelPositionY () {
            return (this.length - 1) * 17
        },
        minMaxRatioFactor () {
            let ratio = this.max / this.min

            return (ratio - 1) / ratio
        },
        width () {
            return this.$el.offsetWidth
        },
        offsetLeft () {
            return this.$el.offsetLeft
        }
    },
    mounted () {
        // TODO: calculate this with reverse function
        this.pointerPositionX = this.pointerPositionStartX * this.width
    },
    methods: {
        onStart () {
            this.isDragging = true
        },
        onEnd () {
            this.isDragging = false

            this.$emit('change', this.length)
            this.$emit('input', this.length)
        },
        onMove: _.throttle(function (e) {
            if (!this.isDragging) {
                return
            }

            let offsetLeft = this.offsetLeft,
                offsetWidth = this.width,
                absoluteX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX,
                relativeX = absoluteX - offsetLeft

            relativeX = relativeX > offsetWidth ? offsetWidth : relativeX
            relativeX  = relativeX < 0 ? 0 : relativeX

            this.pointerPositionX = (relativeX * (offsetWidth - this.$refs.pointer.offsetWidth)) / offsetWidth

            if (this.func === null) {
                this.length = Math.ceil(this.max * relativeX * this.minMaxRatioFactor / offsetWidth) + this.min

                return
            }

            this.length = Math.ceil(this.func.call(this.func, relativeX / offsetWidth))
        }, 15)
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.lengthbar {
    @include no-highlight();
    padding: 44px 0 15px;
    cursor: pointer;

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

    @media (min-width: $screen-laptop) {
        &:hover:not(.is-dragging) & {
            &-trace {
                background-color: $color-primary-hover;
            }
        }
    }
}
</style>
