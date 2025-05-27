<template>
  <div class="city-list">
    <table>
      <thead>
        <tr>
          <th>Code Insee</th>
          <th>Ville</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(city, i) in cities" :key="i" @click="() => onCityClick(city.insee)">
          <td>{{ city.insee }}</td>
          <td>{{ city.name }}</td>
          <td>{{ city.population }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { City } from '../interfaces/City'

interface Props {
  cities: City[]
  onCityClick: (codeInsee: string) => void
}

const { cities, onCityClick } = defineProps<Props>()
</script>

<style scoped>
.city-list {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem;
  min-width: 600px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #edf2f7; /* gris clair */
}

th {
  font-weight: bold;
  padding: 0.75rem;
  text-align: left;
}

td {
  padding: 0.75rem;
  text-align: left;
}

tr:hover {
  background-color: #f7fafc;
  cursor: pointer;
}
</style>
