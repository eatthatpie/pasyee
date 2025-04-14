<template>
  <div :class="['filters-list', { 'is-inactive': !isActive }]">
    <div
      v-for="item in modelValue"
      :key="item.label"
      :class="['filters-item', { 'is-active': item.isActive }]"
      @click="isActive ? (item.isActive = !item.isActive) : null"
    >
      <span>
        <i class="icon-checkmark" />
        <i class="icon-checkmark" />
      </span>
      {{ item.label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>
