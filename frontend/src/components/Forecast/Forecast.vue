<template>
  <div>
    <LoadingIndicator v-if="loading" />
    <ForecastDisplay v-else :forecastData="forecastData" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import LoadingIndicator from './LoadingIndicator.vue'
import ForecastDisplay from './ForecastDisplay.vue'
import type { Forecast } from '../../interfaces/Forecast'
import { ForecastService } from '../../services/ForecastService'

interface Props {
  codeInsee: string
}

const props = defineProps<Props>()

const forecastData = ref<Forecast | null>(null)
const loading = ref(true)

const fetchData = async () => {
  loading.value = true
  try {
    const data = await ForecastService.fetchForecastData(props.codeInsee)
    forecastData.value = data
  } catch (error) {
    console.error('Error fetching forecast data:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
watch(() => props.codeInsee, fetchData)
</script>
