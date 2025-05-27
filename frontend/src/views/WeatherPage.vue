<template>
  <main>bienvenue dans adcleek weather app</main>
  <CityList :cities="currentItems" :onCityClick="openForecastModal" />
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import CityList from '../components/CityList.vue'

import { CityService } from '../services/CityService'
import type { City } from '../interfaces/City'

const weatherData = ref<City[]>([])
const searchTerm = ref('')
const selectedCodeInsee = ref<string | null>(null)
const isOpen = ref(false)

// Chargement des données au montage
CityService.fetchCities()
  .then((data) => {
    weatherData.value = data
  })
  .catch((err) => console.error('Erreur chargement villes :', err))
// Pagination
const currentItems = computed(() => {
  return weatherData.value.slice(0, 10) // Affiche les 10 premières villes
})
// Données filtrées selon la recherche

// Handlers
const openForecastModal = (codeInsee: string) => {
  selectedCodeInsee.value = codeInsee
  isOpen.value = true
}
</script>

<style scoped></style>
