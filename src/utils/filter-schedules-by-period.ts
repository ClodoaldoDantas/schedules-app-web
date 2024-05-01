import { Scheduling } from '../api/fetch-schedules'

const convertHourToMinutesNumber = (hour: number) => hour * 60

export function filterSchedulesByPeriod({
  data,
  fromHour,
  toHour,
}: {
  data?: Scheduling[]
  fromHour: number
  toHour: number
}) {
  if (!data) {
    return []
  }

  const from = convertHourToMinutesNumber(fromHour)
  const to = convertHourToMinutesNumber(toHour)

  return data.filter((scheduling) => {
    return scheduling.time >= from && scheduling.time <= to
  })
}
