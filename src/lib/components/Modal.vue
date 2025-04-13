<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  message: string
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const modalRef = ref<HTMLDialogElement | null>(null)

watch(() => props.isOpen, (isOpen) => {
  if (isOpen && modalRef.value) {
    modalRef.value.showModal()
  } else if (modalRef.value) {
    modalRef.value.close()
  }
})
</script>

<template>
  <dialog ref="modalRef" class="modal" @close="emit('close')">
    <div class="modal-content">
      <p>{{ message }}</p>
      <button @click="emit('close')" class="close-button">Close</button>
    </div>
  </dialog>
</template>

<style scoped>
.modal {
  padding: 0;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal::backdrop {
  background: rgba(0, 0, 0, 0.3);
}

.modal-content {
  padding: 20px;
  min-width: 300px;
}

.close-button {
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.close-button:hover {
  background-color: #3aa876;
}
</style>