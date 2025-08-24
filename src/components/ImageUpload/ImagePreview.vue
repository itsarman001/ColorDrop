<template>
  <div
    v-if="image"
    class="w-full max-w-md mx-auto rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden"
  >
    <!-- Image -->
    <img
      :src="image"
      alt="Uploaded preview"
      class="w-full object-contain max-h-80 bg-gray-50"
    />

    <!-- Footer -->
    <div class="flex items-center justify-between px-4 py-3 bg-gray-50">
      <div class="text-sm text-gray-600">
        <p class="font-medium">Image Preview</p>
        <p class="text-xs text-gray-400">Click remove to clear</p>
      </div>
      <button
        class="px-3 py-1 text-xs rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        @click="$emit('remove')"
      >
        Remove
      </button>
    </div>
  </div>

  <!-- Fallback when no image -->
  <div
    v-else
    class="w-full max-w-md mx-auto flex items-center justify-center p-12 text-gray-400 border-2 border-dashed border-gray-300 rounded-xl"
  >
    No image selected
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string | null;
}>();

defineEmits<{
  (e: "remove"): void;
}>();
</script>
