import 'dayjs/locale/pt-br'

import { Box, Button, Text, TextInput } from '@mantine/core'
import { DateInput, TimeInput } from '@mantine/dates'
import { Calendar, CircleCheckBig, Clock, UserRound } from 'lucide-react'

export function ScheduleForm() {
  return (
    <>
      <Box component="header" mb="xl">
        <Text c="white" component="h2" fz="h2" fw={700}>
          Agende um atendimento
        </Text>

        <Text>
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </Box>

      <Box component="form">
        <DateInput
          label="Data"
          locale="pt-br"
          leftSection={<Calendar size={18} />}
          mb="md"
        />

        <TimeInput label="Horário" mb="md" leftSection={<Clock size={18} />} />

        <TextInput
          label="Cliente"
          leftSection={<UserRound size={18} />}
          mb="xl"
        />

        <Button
          color="yellow"
          leftSection={<CircleCheckBig size={20} />}
          variant="outline"
          fz="md"
          w="100%"
        >
          Agendar
        </Button>
      </Box>
    </>
  )
}
