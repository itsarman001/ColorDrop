<template>
  <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <RouterLink to="/" class="text-2xl font-bold text-primary"> Color Picker </RouterLink>

      <div class="hidden sm:flex sm:space-x-8">
        <DynamicLink
          v-for="item in navigationItems"
          :key="item.name"
          :to="item.path"
          :is-external="item.isExternal"
          classes="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-primary"
          active-class="text-primary border-b-2 border-primary"
        >
          <component v-if="item.icon" :is="item.icon" class="w-4 h-4 mr-2" />
          {{ item.name }}
        </DynamicLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Component } from 'vue'
import DynamicLink from './DynamicLink.vue'

interface NavItem {
  name: string
  path: string
  isExternal?: boolean
  icon?: Component
}

defineProps({
  navigationItems: {
    type: Array as () => NavItem[],
    default: () => [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'GitHub', path: 'https://github.com/your-repo', isExternal: true },
    ],
  },
})
</script>
