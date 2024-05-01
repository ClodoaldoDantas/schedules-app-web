import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Text, TextInput } from '@mantine/core'
import { DateInput, TimeInput } from '@mantine/dates'
import { Calendar, CircleCheckBig, Clock, UserRound } from 'lucide-react'

const schedulingFormSchema = z.object({
  time: z.string().min(1, 'Horário é obrigatório'),
  client: z.string().min(1, 'Cliente é obrigatório'),
})

type SchedulingFormData = z.infer<typeof schedulingFormSchema>

export function SchedulingForm() {
  const [date, setDate] = useState(new Date())

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchedulingFormData>({
    defaultValues: {
      time: '',
      client: '',
    },
    resolver: zodResolver(schedulingFormSchema),
  })

  async function handleCreateScheduling(data: SchedulingFormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log({
      date: date.toISOString(),
      time: data.time,
      client: data.client,
    })
  }

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

      <Box onSubmit={handleSubmit(handleCreateScheduling)} component="form">
        <DateInput
          label="Data"
          locale="pt-br"
          leftSection={<Calendar size={18} />}
          mb="md"
          value={date}
          onChange={(value) => setDate(value as Date)}
        />

        <TimeInput
          label="Horário"
          mb="md"
          leftSection={<Clock size={18} />}
          {...register('time')}
          error={errors.time?.message}
        />

        <TextInput
          label="Cliente"
          leftSection={<UserRound size={18} />}
          mb="xl"
          {...register('client')}
          error={errors.client?.message}
        />

        <Button
          loading={isSubmitting}
          type="submit"
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
