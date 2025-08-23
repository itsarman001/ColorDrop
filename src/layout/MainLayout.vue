<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <BaseNavbar />
    </header>
    <main class="flex-grow container mx-auto px-4 py-6">
      <slot></slot>
    </main>
    <footer>
      <BaseFooter />
    </footer>
  </div>
</template>
<script setup lang="ts">
import BaseNavbar from '@/components/layout/BaseNavbar.vue'
import BaseFooter from '@/components/layout/BaseFooter.vue'
</script>
