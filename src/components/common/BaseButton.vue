<template>
  <button :class="['base-button', btnClasses]" @click="$emit('click')">
    <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
    <slot v-else />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  btnClasses: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click'])
</script>
