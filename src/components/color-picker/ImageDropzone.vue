<template>
  <div class="h-full w-full flex flex-col gap-4 p-8">
    <div>
      <DropImageIcon class="w-1/2 h-1/2 mx-auto" />
      <p class="text-center mt-4">
        Drop an image here, or paste an image with
        <kbd class="border-2 rounded-full p-1 px-3">CTRL</kbd> +
        <kbd class="border-2 rounded-full py-1 px-3">V</kbd>
      </p>
    </div>
    <Button class="mx-auto" @click="fileInput?.click()">Browse Files</Button>
    <input
      type="file"
      accept="image/*"
      class="hidden"
      @change="$emit('file-selected', ($event.target as HTMLInputElement).files?.[0])"
      ref="fileInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DropImageIcon, Button } from '@/components'

const fileInput = ref<HTMLInputElement | null>(null)
</script>
