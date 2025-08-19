<template>
  <div class="bg-background text-foreground min-h-screen flex items-center justify-center gap-4">
    <div class="h-1/4 flex-1 rounded-lg shadow p-4 bg-gray-100">
      <slot name="image-dropzone" />
    </div>
    <div class="h-1/4 flex-1 rounded-lg shadow p-4">
      <slot name="tools" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>