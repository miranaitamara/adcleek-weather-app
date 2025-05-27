import axios from 'axios'
import type { City } from '@/interfaces/City'

export const CityService = {
  fetchCities: async () => {
    try {
      const response = await axios.get('/api/cities')
      return response.data as City[]
    } catch (error) {
      console.error('Error fetching city data:', error)
      throw error
    }
  },

  filterCities: (cities: City[], searchTerm: string) => {
    return cities.filter((city) => city.name.toLowerCase().includes(searchTerm))
  },
}
