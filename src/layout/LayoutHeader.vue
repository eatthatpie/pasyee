<template>
  <header
    class="layout-header"
    :class="{
      'is-nav-open': isNavOpen,
      'is-transparent': isTransparent,
      'is-hidden': isHidden,
    }"
  >
    <div class="container">
      <div class="layout-header-flex">
        <router-link to="/">
          <logo />
        </router-link>
        <hamburger :is-active="isNavOpen" @click.native="toggleNav" />
      </div>
      <navigation />
    </div>
  </header>
</template>

<script>
import Hamburger from "./../components/Hamburger.vue";
import Logo from "./../components/Logo.vue";
import Navigation from "./../components/Navigation.vue";
import throttle from "lodash/throttle";

export default {
  components: {
    Hamburger,
    Logo,
    Navigation,
  },
  props: {
    scrollDirection: {
      type: Number,
      required: true,
    },
    scrollY: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isNavOpen: false,
      isTransparent: true,
      isHidden: false,
      breakpointHide: 250,
    };
  },
  methods: {
    toggleNav: throttle(() => {
      this.isNavOpen = !this.isNavOpen;
    }, 300),
    onClickOutsideNav() {
      if (this.isNavOpen) {
        this.isNavOpen = false;
      }
    },
  },
  watch: {
    $route() {
      this.isNavOpen = false;
    },
    scrollY: (value) => {
      this.isTransparent = value === 0;

      if (value > this.breakpointHide && this.scrollDirection > 0) {
        this.isHidden = true;
      }
    },
    scrollDirection: (value) => {
      if (value < 0) {
        this.isHidden = false;
      }
    },
  },
};
</script>

<style lang="scss">
.layout-header {
  @include transition(
    background-color 0.9s,
    transform 0.3s ease-in-out 0.1s
  ); // TODO: change background-color to opacity
  height: $value-header-height;
  background-color: $color-primary;
  position: relative;
  position: fixed;
  width: 100%;
  z-index: 3;

  &:before {
    @include position-fixed-cover();
    @include transition(transform 0.5s, visibility 0.5s, opacity 0.5s);
    background-color: $color-default;
    visibility: hidden;
    z-index: -1;
    opacity: 0;
    content: "";
  }

  &-flex {
    display: flex;
    justify-content: center;
  }

  &.is-transparent {
    background-color: rgba($color-primary, 0%);
  }

  &.is-hidden:not(.is-nav-open) {
    @include transition(
      background-color 0.9s,
      transform 0.6s
    ); // TODO: change background-color to opacity
    @include transform(translateY(-$value-header-height));
  }

  &.is-nav-open {
    &:before {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (min-width: $screen-laptop) {
    height: $value-header-height-desktop;

    &:before {
      @include transform-origin(-100%, 50%);
      @include transform(scaleX(2));
      left: calc(100% - 330px);
    }

    &-flex {
      justify-content: flex-start;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    &.is-hidden:not(.is-nav-open) {
      @include transform(translateY(-$value-header-height-desktop));
    }

    &.is-nav-open {
      &:before {
        @include transform-origin(100%, 50%);
        @include transform-none();
      }
    }
  }
}
</style>
