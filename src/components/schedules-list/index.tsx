import { Box, Flex, Stack, Text } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { Calendar, CloudSun, MoonStar, Sun } from 'lucide-react'
import { ScheduleCard } from '../schedule-card'

export function SchedulesList() {
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
          value={new Date()}
          mb="md"
        />
      </Flex>

      <Stack gap="md">
        <ScheduleCard
          title="Manhã"
          period="9h-12h"
          icon={<Sun size={20} />}
          data={[{ time: '11:00', client: 'Ryan Dorwart' }]}
        />

        <ScheduleCard
          title="Tarde"
          period="13h-18h"
          icon={<CloudSun size={20} />}
          data={[
            { time: '13:00', client: 'Livia Curtis' },
            { time: '14:00', client: 'Randy Calzoni' },
            { time: '16:00', client: 'Marley Franci' },
            { time: '17:00', client: 'Jaylon Korsgaard' },
          ]}
        />

        <ScheduleCard
          title="Noite"
          period="19h-21h"
          icon={<MoonStar size={20} />}
          data={[]}
        />
      </Stack>
    </>
  )
}
