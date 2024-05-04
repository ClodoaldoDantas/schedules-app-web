import { ActionIcon, Box, Flex, Stack, Text, Tooltip } from '@mantine/core'
import { useMutation } from '@tanstack/react-query'
import { AlertCircle, X } from 'lucide-react'
import { ReactNode } from 'react'
import { deleteScheduling } from '../../api/delete-scheduling'
import { Scheduling } from '../../api/fetch-schedules'
import { queryClient } from '../../lib/query-client'
import { convertMinutesToHour } from '../../utils/convert-minutes-to-hour'
import styles from './styles.module.css'

interface ScheduleCardProps {
  title: string
  period: string
  icon: ReactNode
  data: Scheduling[]
}

export function ScheduleCard({ title, period, icon, data }: ScheduleCardProps) {
  const { mutateAsync: deleteSchedulingFn } = useMutation({
    mutationFn: deleteScheduling,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedules'] })
    },
  })

  async function handleDeleteScheduling(id: string) {
    const confirmDelete = window.confirm(
      'Deseja realmente cancelar este agendamento?'
    )

    if (!confirmDelete) return

    await deleteSchedulingFn(id)
  }

  return (
    <Box className={styles.card}>
      <Flex
        align="center"
        justify="space-between"
        py={12}
        px={20}
        className={styles.cardHeader}
      >
        <Flex align="center" gap="xs">
          {icon}
          <Text component="span">{title}</Text>
        </Flex>

        <Text component="span">{period}</Text>
      </Flex>

      <Stack gap="xs" p={20}>
        {data.length === 0 && (
          <Flex align="center" gap="xs">
            <AlertCircle size={20} />
            <Text>Não há agendamentos para este período</Text>
          </Flex>
        )}

        {data.map((item) => (
          <Flex align="center" justify="space-between" key={item.client}>
            <Flex align="center" gap="sm">
              <Text fw={700}>{convertMinutesToHour(item.time)}</Text>
              <Text>{item.client}</Text>
            </Flex>

            <Tooltip label="Cancelar Agendamento">
              <ActionIcon
                onClick={() => handleDeleteScheduling(item.id)}
                variant="default"
                size="sm"
              >
                <X size={16} />
              </ActionIcon>
            </Tooltip>
          </Flex>
        ))}
      </Stack>
    </Box>
  )
}
