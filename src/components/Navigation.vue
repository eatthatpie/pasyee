<template>
    <div v-click-outside="onClickOutside" class="nav">
        <ul>
            <li>
                <router-link to="/">Generate Password</router-link>
            </li>
            <li>
                <a class="is-inactive">Pasyee At The Home Screen</a>
            </li>
            <li>
                <router-link to="/cookie-policy">Cookie Policy</router-link>
            </li>
            <li class="separator" />
            <li>
                <router-link to="/send-feedback">Send Feedback</router-link>
            </li>
            <li>
                <a 
                    rel="noreferrer"
                    href="https://github.com/eatthatpie/pasyee" 
                    target="_blank"
                >
                    Source on GitHub
                </a>
            </li>
            <li>
                <router-link to="/roadmap">Roadmap</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    directives: {
        ClickOutside
    },
    methods: {
        onClickOutside (e) {
            // @TODO: do this better
            if (!e.target 
                || (
                    e.target.className !== 'hamburger'
                    && (
                        e.target.offsetParent 
                        && e.target.offsetParent.className !== 'hamburger'
                    )
                    && e.target.className !== 'layout-header-flex'
                )
            ) {
                this.$emit('clickOutside')
            }
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.nav {
    @include position-fixed-cover();
    top: $value-header-height;
    visibility: hidden;
    opacity: 0;

    a {
        color: $color-primary;
        font-weight: $font-weight-extrabold;
        font-size: 18px;
    }

    li {
        @include transition(.35s);
        @include transition-delay(0s);
        @include transform(translateY(20px));
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        text-align: center;
        padding: 0 $value-container-padding;
        opacity: 0;

        &:nth-child(n + 2) {
            margin-top: 15px;
        }

        &.separator {
            height: 20px;
        }

        > a {
            display: inline-block;

            &.is-inactive {
                color: $color-secondary-muted;
            }
        }
    }

    ul {
        @include position-center-vertically(-62px);
        list-style-type: none;
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
                    $d: ($i / 20);
                    @include transition-delay(#{$d}s);
                }
            }
        }
    }

    @media (min-width: $screen-laptop) {
        left: calc(100% - 330px);

        li {
            padding: 0 $value-container-padding-desktop 0 $value-container-padding;
            text-align: right;

            > a {
                @include hover-out();
            }
        }
    }
}
</style>
