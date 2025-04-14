<template>
  <div
    class="nav-container"
    :class="{ 'is-nav-open': isNavOpen }"
    v-click-outside="onClickOutsideNav"
  >
    <hamburger :is-active="isNavOpen" @click.native="toggleNav" />
    <div class="nav">
      <ul>
        <li>
          <router-link to="/">Generate Password</router-link>
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
  </div>
</template>

<script>
import Hamburger from "./../components/Hamburger.vue";
import throttle from "lodash/throttle";
import vClickOutside from "click-outside-vue3";

export default {
  components: { Hamburger },
  data() {
    return {
      isNavOpen: false,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    toggleNav: throttle(function () {
      this.isNavOpen = !this.isNavOpen;
    }, 300),
    onClickOutsideNav(e) {
      if (
        this.isNavOpen &&
        (!e.target ||
          (e.target.className !== "hamburger" &&
            e.target.offsetParent &&
            e.target.offsetParent.className !== "hamburger" &&
            e.target.className !== "layout-header-flex"))
      ) {
        this.isNavOpen = false;
      }
    },
  },
  watch: {
    isNavOpen: function (isOpen) {
      this.$emit("toggle", isOpen);
    },
    $route() {
      this.isNavOpen = false;
    },
  },
};
</script>

<style lang="scss">
@use "sass:math";

.nav {
  visibility: hidden;
  opacity: 0;

  &-container {
    @include position-fixed-cover();
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
  }

  a {
    color: $color-primary;
    font-weight: $font-weight-extrabold;
    font-size: 18px;
  }

  li {
    @include transition(0.35s);
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
          $d: math.div($i, 20);
          @include transition-delay(#{$d}s);
        }
      }
    }
  }

  @media (min-width: $screen-laptop) {
    &-container {
      left: calc(100% - 330px);
    }

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
