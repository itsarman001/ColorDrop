<template>
  <div
    class="p-6 w-full max-w-lg mx-auto flex flex-col items-center gap-6 bg-white shadow-lg rounded-2xl border border-gray-200 transition"
    @paste="handlePaste"
    @drop="handleDrop"
    @dragover.prevent
  >
    <div v-if="image">
      <ImagePreview :image="image" @remove="removeImage" />
    </div>
    <!-- Upload Area -->
    <div
      v-else
      class="cursor-pointer w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue-400 hover:bg-blue-50 transition"
      @click="triggerFileInput"
    >
      <img class="w-24 h-24 mx-auto opacity-80" :src="uploadImage" alt="upload image" />
      <p class="mt-4 text-gray-600 font-medium text-sm">Click to upload or drag & drop</p>
    </div>

    <!-- Instructions -->
    <p class="text-xs text-gray-500 text-center leading-relaxed">
      You can also paste an image with
      <kbd class="bg-gray-100 rounded-md px-1 py-0.5 text-gray-700 font-mono">Ctrl</kbd> +
      <kbd class="bg-gray-100 rounded-md px-1 py-0.5 text-gray-700 font-mono">V</kbd>
    </p>

    <!-- Hidden Input -->
    <input
      class="hidden"
      ref="imageInput"
      type="file"
      accept="image/*"
      @change="handleFileUpload"
    />

    <!-- Action Button -->
    <button
      class="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 hover:shadow-md transition"
      @click="triggerFileInput"
    >
      Upload Image
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import uploadImage from '@/assets/upload-image.svg'
import ImagePreview from './ImagePreview.vue'

interface Props {
  image: string | null
  handleFileUpload: (e: Event) => void
  handlePaste: (e: ClipboardEvent) => void
  handleDrop: (e: DragEvent) => void
  removeImage: () => void
}

defineProps<Props>()

const imageInput = ref<HTMLInputElement | null>(null)

function triggerFileInput() {
  imageInput.value?.click()
}
</script>
