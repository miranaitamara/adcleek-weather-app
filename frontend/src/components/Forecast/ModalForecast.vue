<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="onClose">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Prévision</h3>
        <button class="close" @click="onClose">×</button>
      </div>
      <div class="modal-body">
        <Forecast v-if="selectedCodeInsee" :codeInsee="selectedCodeInsee" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Forecast from './Forecast.vue'
import type { ModalForecast } from '../../interfaces/ModalForecast'

defineProps<ModalForecast>()
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
  padding: 1.2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  color: #1a202c;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  font-weight: bold;
}

.close {
  font-size: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
}
.close-btn {
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>
