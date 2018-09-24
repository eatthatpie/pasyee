<template>
    <div class="button-round">
        <a v-html="label"></a>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'button'
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.button-round {
    text-align: center;
    padding: 10px 0 20px;

    a {
        @include dimensions(85px, 85px);
        @include border-radius(50%);
        background-color: $color-default;
        color: $color-primary;
        font-family: $font-family-default;
        font-weight: $font-weight-bold;
        box-sizing: border-box;
        display: inline-block;
        font-size: 68px;
        padding-top: 2px;
    }
}
</style>
