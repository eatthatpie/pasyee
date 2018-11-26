<template>
    <div :class="[ 'alert', { 'is-open': isOpen } ]">
        <div class="alert-body" v-html="body" />
        <div class="alert-icon">
            <i class="icon-checkmark" />
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            body: '',
            isOpen: false
        }
    },
    methods: {
        open (body, duration = 2500) {
            this.body = body

            this.isOpen = true

            setTimeout(() => {
                this.isOpen = false
            }, duration)
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.alert {
    @include transition(.3s);
    @include transition-delay(.1s);
    background-color: $color-secondary;
    position: fixed;
    visibility: hidden;
    padding: 15px 75px 15px 30px;
    left: 20px;
    right: 20px;
    top: 145px;
    opacity: 0;

    &-body {
        font-size: 18px;
    }

    &-icon {
        @include transition(.3s);
        @include transition-delay(.2s);
        @include transform(scale(.3));
        @include dimensions(95px, 100%);
        position: absolute;
        right: 0;
        top: 0;
        opacity: 0;

        [class^="icon-"] {
            @include position-center-vertically();
            color: $color-success;
            font-size: 36px;
            right: 30px;
        }
    }

    &.is-open {
        visibility: visible;
        opacity: 1;
    }

    &.is-open & {
        &-icon {
            @include transform(scale(1));
            opacity: 1;
        }
    }
}
</style>
