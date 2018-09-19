<template>
    <div class="nav">
        <ul>
            <li>
                <a href="/">Generate Password</a>
            </li>
            <li>
                <a href="/htpasswd">Generate Password For .htpasswd</a>
            </li>
            <li>
                <a href="/how-to-memorize-your-password">How To Memorize Your Passwords</a>
            </li>
            <li>
                <a href="https://github.com/eatthatpie/pasyee" target="_blank">Source on GitHub</a>
            </li>
            <li>
                <a href="/send-feedback">Send Feedback</a>
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
