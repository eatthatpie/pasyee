<template>
    <footer class="layout-footer">
        <div class="container">
            <div class="layout-footer-text">
                &copy; eatthatpie (Tomasz Jamróg) 2018.
            </div> 
            <div class="layout-footer-links">
                <ul>
                    <li>
                        <a href="/privacy">Privacy</a>
                    </li>
                    <li>
                        <a href="https://github.com/eatthatpie/pasyee" target="_blank">
                            GitHub
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
    text-align: center;
    padding: 28px 0 20px;

    &-text {
        font-size: .75em;
    }

    &-links {
        padding: 8px 0 0;
        
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
}
</style>
