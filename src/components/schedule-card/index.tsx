import { ReactNode } from 'react'
import { Box, Flex, Text } from '@mantine/core'
import styles from './styles.module.css'
import { AlertCircle } from 'lucide-react'

interface ScheduleCardProps {
  title: string
  period: string
  icon: ReactNode
  data: {
    time: string
    client: string
  }[]
}

export function ScheduleCard({ title, period, icon, data }: ScheduleCardProps) {
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

      <Box p={20}>
        {data.length === 0 && (
          <Flex align="center" gap="xs">
            <AlertCircle size={20} />
            <Text>Não há agendamentos para este período</Text>
          </Flex>
        )}

        {data.map((item) => (
          <Flex key={item.client} align="center" gap="sm">
            <Text fw={700}>{item.time}</Text>
            <Text>{item.client}</Text>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}
