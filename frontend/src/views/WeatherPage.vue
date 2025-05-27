<template>
  <div class="weather-page">
    <h1 class="page-title">Prévisions météo</h1>
    <input
      type="text"
      class="search-input"
      placeholder="Rechercher par ville..."
      v-model="searchTerm"
    />
    <CityList :cities="currentItems" :onCityClick="openForecastModal" />
    <Pagination :currentPage="currentPage" :totalPages="totalPages" :onPageChange="changePage" />
    <ModalForecast :isOpen="isOpen" :onClose="closeModal" :selectedCodeInsee="selectedCodeInsee" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CityList from '../components/CityList.vue'
import Pagination from '../components/Pagination.vue'
import ModalForecast from '../components/Forecast/ModalForecast.vue'
import { CityService } from '../services/CityService'
import type { City } from '../interfaces/City'

const weatherData = ref<City[]>([])
const searchTerm = ref('')
const selectedCodeInsee = ref<string | null>(null)
const isOpen = ref(false)

const currentPage = ref(1)
const itemsPerPage = 6

// Chargement des données au montage
CityService.fetchCities()
  .then((data) => {
    weatherData.value = data
  })
  .catch((err) => console.error('Erreur chargement villes :', err))

// Données filtrées selon la recherche
const filteredData = computed(() => {
  const term = searchTerm.value.toLowerCase().trim()
  return !term ? weatherData.value : CityService.filterCities(weatherData.value, term)
})

// Pagination
const currentItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredData.value.slice(start, start + itemsPerPage)
})
const totalPages = computed(() => Math.ceil(filteredData.value.length / itemsPerPage))

// Handlers
const openForecastModal = (codeInsee: string) => {
  selectedCodeInsee.value = codeInsee
  isOpen.value = true
}
const closeModal = () => (isOpen.value = false)
const changePage = (page: number) => (currentPage.value = page)
</script>

<style scoped>
.weather-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.page-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}
.search-input {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
}
</style>
