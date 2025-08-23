<template>
  <input :class="['base-input', inputClasses]" v-bind="$attrs" />
</template>

<script lang="ts" setup>
defineProps({
  inputClasses: {
    type: String,
    default: '',
  },
})
</script>
