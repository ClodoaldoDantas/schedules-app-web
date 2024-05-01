import { api } from '../lib/api'

interface CreateSchedulingRequest {
  client: string
  time: string
  date: string
}

export async function createScheduling(body: CreateSchedulingRequest) {
  await api.post('/schedules', body)
}
