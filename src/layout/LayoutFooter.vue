<template>
    <footer class="layout-footer">
        <div class="container">
            <div class="layout-footer-text">
                &copy; eatthatpie 2018.
            </div> 
            <div class="layout-footer-links">
                <ul>
                    <li>
                        <router-link to="/cookie-policy">Cookie Policy</router-link>
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
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.layout-footer {
    position: relative;
    text-align: center;
    padding: 28px 0 $value-container-padding;

    &-text {
        font-size: .88em;
    }

    &-links {
        padding: 8px 0 8px;
        
        ul {
            list-style-type: none;
            font-size: 0;

            > li {
                display: inline-block;
                position: relative;
                font-size: 15px;

                &:nth-child(n + 2) {
                    margin-left: 24px;

                    &:before {
                        content: '';
                        @include dimensions(1px, 100%);
                        background-color: $color-default;
                        display: block;
                        position: absolute;
                        left: -12px;
                    }
                }
                
                a {
                    color: $color-default;
                }
            }
        }
    }

    &-text + &-links,
    &-links + &-text {
        padding-top: 10px;
    }

    @media (min-width: $screen-laptop) {
        padding: 28px 0 $value-container-padding-desktop;

        &-links {
            ul {
                > li {
                    > a {
                        @include hover-out($color-default);
                    }
                }
            }
        }
    }
}
</style>
