<script setup lang="ts">
import { ref } from 'vue'
import { DropImageIcon, Button } from '@/components'
import { useImageInput } from '@/composables/useImageInput'

const fileInput = ref<HTMLInputElement | null>(null)
const { selectedImage, handleFileSelect, handlePaste, handleDrop } = useImageInput()
</script>

<template>
  <div
    @paste="handlePaste"
    @dragover.prevent
    @drop="handleDrop"
    class="h-full w-full flex flex-col gap-4 p-8 border-2 border-dashed border-gray-300 rounded-lg"
  >
    <div v-if="selectedImage" class="mt-4">
      <img :src="selectedImage" alt="Selected image" class="max-w-full h-auto" />
    </div>
    <div v-else>
      <DropImageIcon class="w-1/2 h-1/2 mx-auto" />
      <p class="text-center mt-4">
        Drop an image here, or paste an image with
        <kbd class="bg-gray-400 text-white border-2 border-white rounded-full p-1 px-3">CTRL</kbd> +
        <kbd class="bg-gray-400 text-white border-2 border-white rounded-full py-1 px-3">V</kbd>
      </p>
    </div>
    <Button class="mx-auto" @click="fileInput?.click()">{{
      selectedImage ? 'Change File' : 'Browse Files'
    }}</Button>
    <input type="file" accept="image/*" ref="fileInput" class="hidden" @change="handleFileSelect" />
  </div>
</template>
