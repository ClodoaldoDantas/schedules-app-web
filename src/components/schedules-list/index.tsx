import { Box, Flex, Stack, Text } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { Calendar, CloudSun, MoonStar, Sun } from 'lucide-react'
import { useState } from 'react'
import { Scheduling, fetchSchedules } from '../../api/fetch-schedules'
import { ScheduleCard } from '../schedule-card'

const convertHourToMinutesNumber = (hour: number) => hour * 60

function filterSchedulesByPeriod({
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

export function SchedulesList() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const dateFormatted = dayjs(selectedDate).format('YYYY-MM-DD')

  const { data: schedules } = useQuery({
    queryKey: ['schedules', dateFormatted],
    queryFn: () => fetchSchedules({ date: dateFormatted }),
  })

  const schedulesMorning = filterSchedulesByPeriod({
    data: schedules,
    fromHour: 9,
    toHour: 12,
  })

  const schedulesAfternoon = filterSchedulesByPeriod({
    data: schedules,
    fromHour: 13,
    toHour: 18,
  })

  const schedulesNight = filterSchedulesByPeriod({
    data: schedules,
    fromHour: 19,
    toHour: 21,
  })

  return (
    <>
      <Flex
        component="header"
        align="flex-start"
        justify="space-between"
        mb="xl"
      >
        <Box>
          <Text c="white" component="h2" fz="h2" fw={700}>
            Sua agenda
          </Text>

          <Text>Consulte os seus cortes de cabelo agendados por dia</Text>
        </Box>

        <DateInput
          locale="pt-br"
          leftSection={<Calendar size={18} />}
          value={selectedDate}
          onChange={(date) => setSelectedDate(date as Date)}
          mb="md"
        />
      </Flex>

      <Stack gap="md">
        <ScheduleCard
          title="Manhã"
          period="9h-12h"
          icon={<Sun size={20} />}
          data={schedulesMorning}
        />

        <ScheduleCard
          title="Tarde"
          period="13h-18h"
          icon={<CloudSun size={20} />}
          data={schedulesAfternoon}
        />

        <ScheduleCard
          title="Noite"
          period="19h-21h"
          icon={<MoonStar size={20} />}
          data={schedulesNight}
        />
      </Stack>
    </>
  )
}
