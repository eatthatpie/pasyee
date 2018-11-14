<template>
    <div class="nav">
        <ul>
            <li>
                <a href="/">Generate Password</a>
            </li>
            <li>
                <a class="is-inactive" href="/whats-new">What's new</a>
            </li>
            <li>
                <a class="is-inactive" href="/adding-pasyee-to-your-home-screen">Adding Pasyee To Your Home Screen</a>
            </li>
            <li>
                <a href="https://github.com/eatthatpie/pasyee" target="_blank" ref="noopener">Source on GitHub</a>
            </li>
            <li>
                <a class="is-inactive" href="/send-feedback">Send Feedback</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.nav {
    @include position-fixed-cover();
    visibility: hidden;
    opacity: 0;
    top: $value-header-height;

    a {
        color: $color-primary;
        font-weight: $font-weight-extrabold;
        font-size: 18px;
    }

    li {
        @include transition(.6s);
        @include transition-delay(0s);
        @include transform(translateY(10px));
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        padding: 0 $value-container-padding;
        opacity: 0;

        &:nth-child(n + 2) {
            margin-top: 15px;
        }

        > a {
            display: block;
            text-align: center;

            &.is-inactive {
                color: $color-secondary-muted;
            }
        }
    }

    ul {
        @include position-center-vertically(-62px);
        width: 100%;
    }

    .is-nav-open & {
        visibility: visible;
        opacity: 1;

        li {
            @include transform-reset();
            opacity: 1;

            @for $i from 1 through 10 {
                &:nth-child(#{$i}) {
                    $d: ($i / 8);
                    @include transition-delay(#{$d}s);
                }
            }
        }
    }
}
</style>
