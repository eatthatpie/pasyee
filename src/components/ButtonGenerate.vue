<template>
  <div :class="['button-generate', { 'is-busy': isBusy }]">
    <a v-text="label" class="btn" @click="onClick" />
  </div>
</template>

<script>
import throttle from "lodash/throttle";

export default {
  props: {
    label: {
      type: String,
      default: "button",
    },
  },
  data() {
    return {
      isBusy: false,
    };
  },
  methods: {
    onClick: throttle(function () {
      this.isBusy = true;

      this.$emit("clicked");

      setTimeout(() => {
        this.isBusy = false;
      }, 601);
    }, 601),
  },
};
</script>

<style lang="scss">
.button-generate {
  position: relative;
  text-align: center;
  padding: 33px 0 13px;
  z-index: 1;

  > a {
    border-radius: 3px;
    box-shadow: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 900;
  }

  @media (min-width: $screen-laptop) {
    > a {
      padding: 8px 30px;
      font-size: 1.3rem;
    }
  }
}
</style>
