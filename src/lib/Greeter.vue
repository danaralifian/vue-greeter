<script setup lang="ts">
import { useGreeterStore } from './stores/greeter'
import { onMounted, watch, computed } from 'vue'
import Modal from './components/Modal.vue'

const props = defineProps<{
  message: string
}>()

const store = useGreeterStore()

const modalMessage = computed(() => 
  `${store.message} (clicked ${store.clickCount} times)`
)

onMounted(() => {
  store.setMessage(props.message)
})

watch(() => props.message, (newMessage) => {
  store.setMessage(newMessage)
})
</script>

<template>
  <div class="vue-greeter">
    <button @click="store.showMessage" class="greeter-button">
      Click me!
    </button>
    <div v-if="store.clickCount > 0" class="click-count">
      Button clicked: {{ store.clickCount }} times
    </div>
    <Modal 
      :message="modalMessage"
      :is-open="store.isModalOpen"
      @close="store.closeModal"
    />
  </div>
</template>

<style scoped>
.vue-greeter {
  font-family: system-ui, -apple-system, sans-serif;
}

.greeter-button {
  padding: 8px 16px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.greeter-button:hover {
  background-color: #3aa876;
}

.click-count {
  margin-top: 8px;
  font-size: 14px;
  color: #666;
}
</style>