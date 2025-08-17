<template>
  <div class="bg-background text-foreground min-h-screen flex flex-col">
    <header class="border-b border-border">
      <BaseHeader :navigation-items="NAVIGATION" />
    </header>
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot></slot>
    </main>
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import { BaseHeader, BaseFooter } from '@/components'
import { NAVIGATION } from '@/constants/constants.ts'
</script>

<style></style>
