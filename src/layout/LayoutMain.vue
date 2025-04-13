<template>
  <main class="layout-main">
    <router-view v-slot="{ Component }">
      <transition name="zoom" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.layout-main {
  position: relative;
  padding: ($value-header-height + $value-container-padding) 0 0;
  z-index: 2;

  @media (min-width: $screen-tablet) {
    padding: ($value-header-height-desktop + $value-container-padding) 0 0;
  }
}

.zoom-enter-active,
.zoom-leave-active {
  @include transition(0.4s);
  @include transform-none();
  opacity: 1;
}

.zoom-enter {
  @include transform(translateY(-10px));
  opacity: 0;
}

.zoom-leave-to {
  @include transform(translateY(10px));
  opacity: 0;
}
</style>
