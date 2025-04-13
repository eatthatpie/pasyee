<template>
  <div class="dynamometer" :class="classes">
    <span v-for="i in 10" :key="i" />
  </div>
</template>

<script>
export default {
  props: {
    power: {
      type: Number,
      default: 0,
      validator: (value) => {
        return value >= 0 && value <= 100;
      },
    },
  },
  computed: {
    classes() {
      let out = [],
        level = Math.ceil(this.power / 10);

      for (let i = 1; i <= level; i++) {
        out.push("l" + i);
      }

      return out.join(" ");
    },
  },
  watch: {
    power(current, previous) {},
  },
  methods: {
    updateClasses() {},
  },
};
</script>

<style lang="scss">
.dynamometer {
  padding: 10px 0 3px;

  span {
    background-color: $color-primary-light;
    display: inline-block;
    position: relative;
    margin: 0 2px;
    width: 4px;

    &:before,
    &:after {
      content: "";
      @include transition();
      @include transition-delay(0.05s);
      @include position-cover();
      background-color: $color-default;
      opacity: 0;
    }

    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        $h: 4 * $i;
        height: #{$h}px;
      }
    }
  }

  @for $i from 1 through 10 {
    &.l#{$i} {
      span {
        &:nth-child(#{$i}) {
          &:before {
            opacity: 1;
          }

          &:after {
            animation: testanimation;
            animation-duration: 0.5s;
          }
        }
      }
    }
  }

  &.l10 {
    span {
      &:before {
        background-color: $color-success-light;
      }
    }
  }
}

@keyframes testanimation {
  0% {
    opacity: 1;
  }

  100% {
    @include transform(scaleY(2.4));
    opacity: 0;
  }
}
</style>
