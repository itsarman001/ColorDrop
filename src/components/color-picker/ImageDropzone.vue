<template>
  <div class="h-full w-full flex flex-col gap-4 p-4">
    <div>
      <DropImageIcon class="w-1/2 h-1/2 mx-auto" />
      <p class="text-center mt-4">
        Drop an image here, or paste an image with
        <kbd class="border-2 rounded-full p-1 px-3">CTRL</kbd> +
        <kbd class="border-2 rounded-full py-1 px-3">V</kbd>
      </p>
    </div>
    <Button class="mx-auto" @click="fileInput?.click()">Browse Files</Button>
    <input type="file" accept="image/*" ref="fileInput" class="hidden" @change="handleFileSelect" />
  </div>
  <div v-if="selectedImage" class="mt-4">
    <img :src="selectedImage" alt="Selected image" class="max-w-full h-auto" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DropImageIcon, Button } from '@/components'

const fileInput = ref<HTMLInputElement | null>(null)
const selectedImage = ref<string | null>(null)

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      selectedImage.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}
</script>
