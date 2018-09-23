<template>
    <div class="dynamometer" :class="classes">
        <span v-for="i in 10" :key="i" />
    </div>
</template>

<script>
export default {
    props: {
        power: {
            type: Number,
            default: 0,
            validator: value => {
                return value >= 0 && value <= 100
            }
        }
    },
    computed: {
        classes () {
            let out = [],
                level = Math.ceil(this.power / 10)

            for (let i = 1; i <= level; i++) {
                out.push('l' + i)
            }

            return out.join(' ')
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.dynamometer {
    span {
        background-color: $color-primary-light;
        display: inline-block;
        position: relative;
        margin: 0 2px;
        width: 4px;

        &:before {
            content: '';
            @include position-cover();
            background-color: $color-default;
            opacity: 0;
        }

        @for $i from 1 through 10 {
            &:nth-child(#{$i}) {
                $h: 4 * $i;
                height: #{$h}px;
            }
        }
    }

    @for $i from 1 through 10 {
        &.l#{$i} {
            span {
                &:nth-child(#{$i}) {
                    &:before {
                        opacity: 1;
                    }
                }
            }
        }
    }

    &.l9,
    &.l10 {
        span {
            &:before {
                background-color: #009900;
            }
        }
    }
}
</style>
