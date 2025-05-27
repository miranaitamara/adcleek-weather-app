import axios from 'axios'
import type { Forecast } from '@/interfaces/Forecast'

export const ForecastService = {
  fetchForecastData: async (codeInsee: string) => {
    try {
      const response = await axios.get(`/api/cities/${codeInsee}/forecast`)
      return response.data as Forecast
    } catch (error) {
      console.error('Error fetching forecast data:', error)
      throw error
    }
  },
}
