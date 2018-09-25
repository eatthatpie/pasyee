<template>
    <div class="button-round">
        <a>
            <slot />
        </a>
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
    padding: 30px 0 10px;

    a {
        @include dimensions(64px, 64px);
        @include border-radius(50%);
        background-color: $color-default;
        color: $color-primary;
        font-family: $font-family-default;
        font-weight: $font-weight-bold;
        box-sizing: border-box;
        display: inline-block;
        font-size: 39px;
        top: -17px;

        [class^="icon-"] {
            font-weight: $font-weight-bold;
            color: $color-primary-darker;
            position: relative;
            font-size: 39px;
            top: 12px;
        }
    }
}
</style>
