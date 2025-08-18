<template>
  <div>
    <h1 class="text-3xl font-bold text-uppercase">Pick Color From Image</h1>
    <p class="mt-4 text-2xl font-semibold">
      Create custom color palettes from any image. Simply upload an image or select one from the
      gallery for inspiring color schemes available in HEX, RGB, HSB, and HSL color codes.
    </p>
  </div>
  <ImageCard>
    <template #image-dropzone>
      <ImageDropzone />
    </template>
    <template #tools>
      <ImageTools />
    </template>
  </ImageCard>
</template>

<script setup lang="ts">
import { ImageCard, ImageDropzone, ImageTools } from '@/components'
</script>
