<template>
  <div class="flex flex-col gap-8 max-w-5xl mx-auto p-6">
    <!-- Header -->
    <header class="text-center space-y-3">
      <h2 class="text-gray-900 text-4xl font-bold">Image Color Picker</h2>
      <p class="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        Create custom color palettes from any image with this color picker tool. Simply upload an
        image or drag & drop one to instantly extract
        <span class="font-medium text-gray-800">HEX, RGB, HSB, and HSL</span>
        color codes.
      </p>
    </header>

    <!-- Drop Zone -->
    <section class="w-full min-h-[240px] flex items-center justify-center">
      <ImageDropZone
        :image="image"
        :handle-file-upload="handleFileUpload"
        :handle-paste="handlePaste"
        :handle-drop="handleDrop"
        :remove-image="removeImage"
      />
    </section>

    <!-- Extracted Colors -->
    <section v-if="image" class="mt-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-3">Extracted Colors</h3>
      <ImageList />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useImageUpload } from '@/composables/useImageUpload'
import ImageDropZone from './ImageDropZone.vue'
import ImageList from './ImageList.vue'

const { image, handleFileUpload, handlePaste, handleDrop, removeImage } = useImageUpload()
</script>
