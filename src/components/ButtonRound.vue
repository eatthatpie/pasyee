<template>
    <div class="button-round">
        <a v-text="label"></a>
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
    padding: 20px 0;

    a {
        @include dimensions(100px, 100px);
        @include border-radius(50%);
        background-color: $color-default;
        color: $color-primary;
        font-family: $font-family-default;
        font-weight: $font-weight-bold;
        box-sizing: border-box;
        display: inline-block;
        font-size: 28px;
        padding-top: 32px;
    }
}
</style>
