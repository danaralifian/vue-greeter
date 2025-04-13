import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGreeterStore = defineStore('greeter', () => {
  const message = ref('')
  const clickCount = ref(0)
  const isModalOpen = ref(false)

  function setMessage(newMessage: string) {
    message.value = newMessage
  }

  function showMessage() {
    clickCount.value++
    isModalOpen.value = true
  }

  function closeModal() {
    isModalOpen.value = false
  }

  return {
    message,
    clickCount,
    isModalOpen,
    setMessage,
    showMessage,
    closeModal
  }
})