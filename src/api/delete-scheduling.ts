import { api } from '../lib/api'

export async function deleteScheduling(id: string) {
  await api.delete(`/schedules/${id}`)
}
