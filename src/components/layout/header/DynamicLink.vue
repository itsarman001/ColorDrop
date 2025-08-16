<template>
  <a v-if="isExternal" :href="to" target="_blank" rel="noopener noreferrer" :class="classes">
    <slot />
  </a>

  <RouterLink v-else :to="to" :class="classes" :active-class="activeClass">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  to: { type: String, required: true },
  isExternal: { type: Boolean, default: false },
  classes: { type: String, default: '' },
  activeClass: { type: String, default: '' },
})
</script>
