<template>
  <div
    class="dark:bg-background text-foreground min-h-screen flex items-center justify-center gap-4"
  >
    <div class="h-1/4 flex-1 rounded-lg shadow p-4"><ImageDropzone /></div>
    <div class="dark:bg-gray-800 h-1/3 flex-1 bg-gray-500 rounded-lg shadow-lg">World</div>
  </div>
</template>
<script setup lang="ts">
import { ImageDropzone } from '@/components'
</script>
