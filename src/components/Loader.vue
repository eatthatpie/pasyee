<template>
  <div :class="['loader', { 'is-busy': isBusy }]">
    <div class="loader-spinner">
      <i class="icon-spinner2" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isBusy: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
.loader {
  @include transition(0.3s);
  @include transform(scale(0.5));
  @include position-cover();
  visibility: hidden;
  opacity: 0;

  &-spinner {
    [class^="icon-"] {
      display: inline-block;
      animation-name: spinner;
      animation-duration: 0.5s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      font-size: 32px;
    }
  }

  &.is-busy {
    @include transform(scale(1));
    visibility: visible;
    opacity: 1;
  }
}

@keyframes spinner {
  0% {
    @include transform(rotate(0));
  }
  100% {
    @include transform(rotate(360deg));
  }
}
</style>
