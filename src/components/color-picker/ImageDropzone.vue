<template>
  <div
    @paste="handlePaste"
    @dragover.prevent
    @drop="handleDrop"
    class="h-full w-full flex flex-col gap-4 p-8 border-2 border-dashed border-gray-300 rounded-lg"
  >
    <div>
      <DropImageIcon class="w-1/2 h-1/2 mx-auto" />
      <p class="text-center mt-4">
        Drop an image here, or paste an image with
        <kbd class="bg-gray-400 text-white border-2 border-white rounded-full p-1 px-3">CTRL</kbd> +
        <kbd class="bg-gray-400 text-white border-2 border-white rounded-full py-1 px-3">V</kbd>
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

const handlePaste = (event: ClipboardEvent) => {
  const items = event.clipboardData?.items
  if (!items) return

  for (const item of items) {
    if (!item.type.startsWith('image/')) continue

    const file = item.getAsFile()
    if (!file) continue

    const reader = new FileReader()
    reader.onload = ({ target }) => {
      if (target?.result) {
        selectedImage.value = target.result as string
      }
    }
    reader.readAsDataURL(file)

    break
  }
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  const items = event.dataTransfer?.items
  if (!items) return

  for (const item of items) {
    if (!item.type.startsWith('image/')) continue

    const file = item.getAsFile()
    if (!file) continue

    const reader = new FileReader()
    reader.onload = ({ target }) => {
      if (target?.result) {
        selectedImage.value = target.result as string
      }
    }
    reader.readAsDataURL(file)

    break
  }
}
</script>
