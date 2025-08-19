import { ref } from 'vue'

export function useImageInput() {
  const selectedImage = ref<string | null>(null)

  const loadImage = (file: File) => {
    if (!file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (e) => {
      selectedImage.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  // ---- Handlers ----
  const handleFileSelect = (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]
    if (file) loadImage(file)
  }

  const handlePaste = (event: ClipboardEvent) => {
    const items = event.clipboardData?.items
    if (!items) return
    for (const item of items) {
      const file = item.getAsFile()
      if (file) {
        loadImage(file)
        break
      }
    }
  }

  const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    const items = event.dataTransfer?.items
    if (!items) return
    for (const item of items) {
      const file = item.getAsFile()
      if (file) {
        loadImage(file)
        break
      }
    }
  }

  return {
    selectedImage,
    handleFileSelect,
    handlePaste,
    handleDrop,
  }
}
