<template>
  <div class="forecast-container">
    <div class="icon-wrapper">
      <i :class="`bi bi-${forecastData?.icon}`" class="weather-icon"></i>
    </div>

    <div class="centered mt-6">
      <p>Probabilité de pluie</p>
      <div class="mt-6">
        <p class="big-text bold">{{ forecastData?.forecast.probarain }} %</p>
      </div>
    </div>

    <div class="flex-between mt-6">
      <div class="temp-column">
        <p class="small-text bold center">Min</p>
        <p class="big-text bold">{{ forecastData?.forecast.tmin }} °C</p>
      </div>
      <div class="temp-column">
        <p class="small-text bold center">Max</p>
        <p class="big-text bold">{{ forecastData?.forecast.tmax }} °C</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Forecast } from '../../interfaces/Forecast'

interface Props {
  forecastData: Forecast | null
}

defineProps<Props>()
</script>

<style scoped>
.forecast-container {
  min-width: 20rem;
  padding: 1rem;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
}

.weather-icon {
  font-size: 60px;
}

.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mt-6 {
  margin-top: 1.5rem;
}

.flex-between {
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
}

.temp-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.big-text {
  font-size: 1.5rem;
}

.small-text {
  font-size: 0.875rem;
}

.bold {
  font-weight: bold;
}

.center {
  text-align: center;
}
</style>
