import { Box, Flex, Skeleton, Stack, Text } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { Calendar, CloudSun, MoonStar, Sun } from 'lucide-react'
import { useState } from 'react'
import { fetchSchedules } from '../../api/fetch-schedules'
import { filterSchedulesByPeriod } from '../../utils/filter-schedules-by-period'
import { ScheduleCard } from '../schedule-card'

export function SchedulesList() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const dateFormatted = dayjs(selectedDate).format('YYYY-MM-DD')

  const { data: schedules, isLoading } = useQuery({
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
        {isLoading ? (
          <>
            <Skeleton height={120} radius="md" />
            <Skeleton height={120} radius="md" />
            <Skeleton height={120} radius="md" />
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack>
    </>
  )
}
