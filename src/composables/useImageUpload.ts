import { ref, type Ref } from 'vue'

export function useImageUpload() {
  const image: Ref<string | null> = ref(null)

  function handleFileUpload(e: Event) {
    const target = e.target as HTMLInputElement | null
    if (!target?.files?.length) return

    const file = target.files[0]
    if (file && file.type.startsWith('image/')) {
      image.value = URL.createObjectURL(file)
    }
  }

  function handlePaste(e: ClipboardEvent) {
    if (!e.clipboardData) return

    for (const item of e.clipboardData.items) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile()
        if (file) {
          image.value = URL.createObjectURL(file)
        }
      }
    }
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault()
    if (!e.dataTransfer?.files?.length) return

    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      image.value = URL.createObjectURL(file)
    }
  }

  function removeImage() {
    if (image.value) {
      URL.revokeObjectURL(image.value)
      image.value = null
    }
  }

  return {
    image,
    handleFileUpload,
    handlePaste,
    handleDrop,
    removeImage,
  }
}
