import { Flex, Box } from '@mantine/core'
import { SchedulingForm } from '../../components/scheduling-form'
import { SchedulesList } from '../../components/schedules-list'
import styles from './styles.module.css'

export function Home() {
  return (
    <Flex gap="xs" mih="calc(100vh - 2.5rem)">
      <Box className={styles.aside} component="aside" p={80} w={500}>
        <SchedulingForm />
      </Box>

      <Box component="main" p={80} flex={1}>
        <SchedulesList />
      </Box>
    </Flex>
  )
}
