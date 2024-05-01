import { api } from '../lib/api'

export interface Scheduling {
  id: string
  client: string
  date: string
  time: number
}

interface FetchSchedulesRequest {
  date: string
}

export async function fetchSchedules({
  date,
}: FetchSchedulesRequest): Promise<Scheduling[]> {
  const response = await api.get('/schedules', {
    params: {
      date,
    },
  })

  return response.data
}
