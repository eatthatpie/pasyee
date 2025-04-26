<template>
  <div :class="['password', { 'is-busy': isBusy, 'is-hint': isHint }]">
    <div class="password-container" title="Tap to copy" @click="onClick">
      <div class="password-letters">
        {{ password }}
      </div>
      <loader :is-busy="isBusy" />
    </div>
    <div class="password-pointer">
      <i class="icon-point-up" />
    </div>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
import { apiGeneratePassword } from "../api";
import { delay } from "../utilts";
import { throttle } from "lodash";

export default {
  components: {
    Loader,
  },
  props: {
    length: {
      type: Number,
      default: 9,
      validator: (v) => v > 0,
    },
    seeders: {
      type: Array,
      default: [],
    },
  },
  created() {
    this.generate = throttle(this._generate, 1000);
  },
  data() {
    return {
      password: "",
      strength: 0,
      isBusy: false,
      isHint: false,
    };
  },
  methods: {
    onClick() {
      this.stopHintAnimation();
      this.$copyText(this.password);
      this.$emit("copy");
      this.$store.dispatch("disableHintAnimation");
    },
    stopHintAnimation() {
      this.isHint = false;
    },
    async _generate() {
      this.isBusy = true;
      this.isHint = false;

      const [response] = await Promise.all([
        apiGeneratePassword(["letters", ...this.seeders], this.length),
        delay(500),
      ]);

      this.isBusy = false;
      this.password = response.password;
      this.strength = response.strength;

      if (this.$store.getters["isHintAnimationEnabled"]) {
        this.isHint = true;
      }

      this.$emit("change", {
        strength: this.strength,
      });
    },
  },
};
</script>

<style lang="scss">
.password {
  font-family: $font-family-password;
  font-size: $font-size-password;
  text-align: center;
  position: relative;
  cursor: pointer;
  padding: 25px 0 40px;

  &-container {
    position: relative;
    min-height: 54px;
  }

  &-letters {
    @include transition(0.3s);
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    visibility: visible;
    max-width: 100%;
    opacity: 1;

    &:before {
      content: "";
      @include position-cover(-5px);
      @include border-radius(5px);
      // @include transform(scale(.8));
      @include transition(0.1s);
      background-color: $color-primary-dark;
      display: none;
      left: -15px;
      right: -15px;
      opacity: 0;
      z-index: -1;
    }
  }

  &-pointer {
    @include dimensions(40px, 40px);
    @include border-radius(50%);
    background-color: rgba($color-primary-dark, 0.3);
    position: absolute;
    display: none;
    left: calc(50% - 20px);
    bottom: 15px;

    [class^="icon-"] {
      position: absolute;
      top: 8px;
      left: 7px;
      font-size: 24px;
    }
  }

  &.is-busy & {
    &-letters {
      visibility: hidden;
      opacity: 0;
    }
  }

  &.is-hint & {
    &-letters {
      animation: hintLetters 2.5s ease-in-out 0s infinite;
    }

    &-pointer {
      display: block;
      animation: hintCursor 2.5s ease-in-out 0s infinite;
    }
  }

  @media (min-width: $screen-laptop) {
    &-letters {
      overflow: visible;

      &:before {
        display: block;
      }

      &:hover {
        &:before {
          @include transform-none();
          opacity: 0.61;
        }
      }
    }
  }
}

@keyframes hintCursor {
  0% {
    @include transform(translateY(15px));
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  30% {
    @include transform(translateY(0));
  }
  35% {
    @include transform(none);
  }
  42% {
    @include transform(scale(0.9) translateY(-5px));
  }
  50% {
    @include transform(none);
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes hintCursor {
  0% {
    @include transform(translateY(15px));
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  30% {
    @include transform(translateY(0));
  }
  35% {
    @include transform(none);
  }
  45% {
    @include transform(scale(0.9) translateY(-5px));
  }
  55% {
    @include transform(none);
  }
  60% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes hintLetters {
  0% {
    @include transform(none);
  }
  40% {
    @include transform(none);
  }
  45% {
    @include transform(scale(0.99));
  }
  50% {
    @include transform(none);
  }
  100% {
    @include transform(none);
  }
}

@-webkit-keyframes hintLetters {
  0% {
    @include transform(none);
  }
  40% {
    @include transform(none);
  }
  45% {
    @include transform(scale(0.99));
  }
  50% {
    @include transform(none);
  }
  100% {
    @include transform(none);
  }
}
</style>
