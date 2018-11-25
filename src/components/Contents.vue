<template>
    <div class="contents">
        <div v-if="html" v-html="html" />

        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        html: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.contents {
    h1 + h1,
    h2 + h2,
    h3 + h3,
    h4 + h4,
    h5 + h5,
    h6 + h6 {
        margin-top: -.5em;
    }

    p {
        font-size: $font-size-default;
        line-height: 1.5rem;
        margin: 0;

        &:nth-of-type(n + 2) {
            margin-top: 1.5em;
        }

        &.contents {
            &-big {
                font-size: 1.25rem;
            }

            &-extrabig {
                font-size: 2.5rem;
            }

            &-small {
                font-size: .88em;
            }
        }
    }

    ul {
        list-style-type: none;

        li {
            position: relative;
            line-height: 24px;
            margin-top: .5em;
            padding-left: 20px;

            &:before {
                content: '';
                @include dimensions(6px);
                background-color: $color-default;
                position: absolute;
                left: 0;
                top: 8px;
            }
        }
    }

    strong {
        font-weight: $font-weight-bold;
    }

    &-center {
        text-align: center;
    }
}
</style>
