<template>
  <footer class="layout-footer">
    <div class="container">
      <div class="layout-footer-links">
        <ul>
          <li>
            <router-link to="/terms">Terms</router-link>
          </li>
          <li>
            <router-link to="/privacy-policy">Privacy</router-link>
          </li>
        </ul>
      </div>
      <div class="layout-footer-text">&copy; pasyee.com 2025</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.layout-footer {
  position: relative;
  text-align: center;
  padding: 28px 0 $value-container-padding;

  &-text {
    font-size: 0.88em;
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
            content: "";
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
