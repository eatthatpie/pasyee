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

    &-center {
        text-align: center;
    }

    &-small {
        font-size: .75em;
    }
}
</style>
